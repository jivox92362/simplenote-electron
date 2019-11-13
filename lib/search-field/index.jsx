import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce, isEmpty } from 'lodash';
import SmallCrossIcon from '../icons/cross-small';
import appState from '../flux/app-state';
import { tracks } from '../analytics';
import SearchSuggestions from '../search-suggestions';

const { search, setSearchFocus } = appState.actionCreators;
const { recordEvent } = tracks;
const KEY_ESC = 27;
const KEY_ENTER = 13;
const KEY_ARROW_UP = 38;
const KEY_ARROW_DOWN = 40;

const SEARCH_DELAY = 500;

export class SearchField extends Component {
  static displayName = 'SearchField';

  static propTypes = {
    isTagSelected: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    searchFocus: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchFocused: PropTypes.func.isRequired,
  };

  state = {
    query: '',
    searchSelected: false,
  };

  componentDidUpdate() {
    const { searchFocus, onSearchFocused, filter } = this.props;

    if (searchFocus && this.inputField) {
      this.inputField.select();
      this.inputField.focus();
      onSearchFocused();
    }

    // check to see if the filter has been updated (by a tag being clicked from suggestions)
    // this is a hack to work around query not being in app state (yet)
    if (filter !== this.state.query) {
      this.inputField.value = filter;
    }
  }

  doSearch = query => {
    this.setState({ query, searchSelected: true });
    this.debouncedSearch(query);
  };

  interceptKeys = event => {
    switch (event.keyCode) {
      case KEY_ESC:
        if (this.state.query === '') {
          this.inputField.blur();
        }
        return this.clearQuery();

      case KEY_ENTER:
        return this.keyHandler.select();

      case KEY_ARROW_DOWN:
        return this.keyHandler.next();

      case KEY_ARROW_UP:
        return this.keyHandler.prev();
    }
  };

  storeInput = r => (this.inputField = r);
  storeKeyHandler = keyHandler => (this.keyHandler = keyHandler);

  debouncedSearch = debounce(query => this.props.onSearch(query), SEARCH_DELAY);

  update = ({ target: { value: query } }) => {
    this.setState({ query: encodeURIComponent(query), searchSelected: false });
    this.debouncedSearch(query);
  };

  clearQuery = () => {
    this.setState({ query: '' });
    this.debouncedSearch('');
    this.debouncedSearch.flush();
  };

  render() {
    const { isTagSelected, placeholder } = this.props;
    const { query, searchSelected } = this.state;
    const hasQuery = query && query.length > 0;
    // const shouldShowSuggestions = hasQuery && !searchSelected;
    const shouldShowSuggestions = false;

    const screenReaderLabel =
      'Search ' + (isTagSelected ? 'notes with tag ' : '') + placeholder;

    return (
      <Fragment>
        <div className="search-field">
          <input
            aria-label={screenReaderLabel}
            ref={this.storeInput}
            type="text"
            placeholder={placeholder}
            onChange={this.update}
            onKeyDown={this.interceptKeys}
            value={decodeURIComponent(query)}
            spellCheck={false}
          />
          <button
            aria-label="Clear search"
            hidden={!hasQuery}
            onClick={this.clearQuery}
          >
            <SmallCrossIcon />
          </button>
          {shouldShowSuggestions && (
            <SearchSuggestions
              query={query}
              onSearch={this.doSearch}
              storeKeyHandler={this.storeKeyHandler}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ appState: state }) => ({
  filter: state.filter,
  isTagSelected: !isEmpty(state.tag),
  placeholder: state.listTitle,
  searchFocus: state.searchFocus,
});

const mapDispatchToProps = dispatch => ({
  onSearch: filter => {
    dispatch(search({ filter }));
    recordEvent('list_notes_searched');
  },
  onSearchFocused: () => dispatch(setSearchFocus({ searchFocus: false })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField);
