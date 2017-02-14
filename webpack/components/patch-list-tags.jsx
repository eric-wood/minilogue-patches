import React from 'react';
import TagList from './tag-list';

class PatchListTags extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: []
    };

    this.fetchTags();
  }

  fetchTags() {
    fetch('/tags')
    .then((response) => response.json())
    .then((json) => {
      const tags = json.tags;
      this.setState({ tags });
    });
  }

  render() {
    return (
      <div className="top-tags">
        <h3><i className="fa fa-tags" /> Top tags</h3>
        <TagList
          tags={this.state.tags}
          onTagSelect={this.props.onTagSelect}
          showIcon={false}
          showCount
        />
      </div>
    );
  }
}

PatchListTags.propTypes = {
  onTagSelect: React.PropTypes.func.isRequired
};

export default PatchListTags;
