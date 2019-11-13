import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import appState from '../flux/app-state';
import { tracks } from '../analytics';

const { search } = appState.actionCreators;
const { recordEvent } = tracks;

export class TagSuggestions extends Component {
  static displayName = 'TagSuggestions';

  static propTypes = {
    query: PropTypes.string.isRequired,
    filteredTags: PropTypes.array.isRequired,
  };

  render() {
    const { filteredTags } = this.props;

    return (
      <Fragment>
        {filteredTags.length > 0 && (
          <div className="tag-suggestions">
            <div className="note-list-header">Tags</div>
            <ul className="tag-suggestions-list">
              {filteredTags.map(tag => (
                <li
                  key={tag.id}
                  id={tag.id}
                  className="tag-suggestion-row"
                  onClick={() => this.props.onSearch(`tag:${tag.id}`)}
                >
                  <span
                    className="tag-suggestion"
                    title={decodeURIComponent(tag.id)}
                  >
                    tag:{decodeURIComponent(tag.id)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ appState: state }, ownProps) => ({
  filteredTags: state.tags
    .filter(function(tag) {
      // todo split on spaces to support additive query args

      // todo limit to 5 suggestions

      // prefix tag ID with "tag:" (encoded) this allows us to match if the user typed the prefix
      // n.b. doing it in this direction instead of stripping off any "tag:" prefix allows support
      // of tags that contain the string "tag:" ¯\_(ツ)_/¯
      var testID = 'tag%3A' + tag.id;

      // todo what if the user has just typed "tag:", right now it matches every tag
      // also subsets of "tag" such as "ta" will suggest all tags... :/

      return (
        testID.search(
          new RegExp('(tag:)?' + encodeURIComponent(ownProps.query), 'i')
        ) !== -1 &&
        // discard exact matches -- if the user has already typed or clicked
        // the full tag name, don't suggest it)
        testID !== encodeURIComponent(ownProps.query)
      );
    })
    .slice(0, 5),
});

const mapDispatchToProps = dispatch => ({
  onSearch: filter => {
    dispatch(search({ filter }));
    recordEvent('list_notes_searched');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagSuggestions);
