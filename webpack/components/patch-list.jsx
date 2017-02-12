import React from 'react';
import fetch from 'isomorphic-fetch';
import { stringify as queryString } from 'query-string';
import PatchListItem from './patch-list-item';
import PatchListTags from './patch-list-tags';
import withMidi, { propTypes as midiPropTypes } from './with-midi';

class PatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patches: [],
      tag: undefined,
      search: undefined
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.searchTag = this.searchTag.bind(this);
    this.patchSearch();
  }

  patchSearch() {
    const params = queryString({
      tags: this.state.tag,
      q: this.state.search
    });

    fetch(`/patches.json?${params}`)
    .then((response) => response.json())
    .then((patches) => {
      this.setState({ patches });
    });
  }

  searchTag(tag) {
    this.setState({ tag });
    this.patchSearch();
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    this.patchSearch();
  }

  render() {
    const patches = this.state.patches.map((patch) => {
      return (
        <PatchListItem
          key={patch.id}
          patch={patch}
          midi={this.props.midi}
          onTagSelect={this.searchTag}
        />
      );
    });

    return (
      <div>
        <h3>Search for {this.state.tag}</h3>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            placeholder="Search..."
            onChange={(e) => this.setState({ search: e.target.value })}
            value={this.state.search}
          />
        </form>

        <PatchListTags onTagSelect={this.searchTag} />

        <ul className="patches">
          {patches}
        </ul>
      </div>
    );
  }
}

PatchList.propTypes = {
  midi: midiPropTypes.isRequired
};


export default withMidi(PatchList, { sysex: true });
