import React from 'react';
import fetch from 'isomorphic-fetch';
import PatchListItem from './patch-list-item';
import withMidi from './with-midi';

class PatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patches: []
    };

    this.patchSearch();
  }

  patchSearch() {
    fetch('/patches.json').then((response) => {
      return response.json();
    }).then((patches) => {
      this.setState({ patches });
    });
  }

  render() {
    const patches = this.state.patches.map((patch) => {
      return <PatchListItem key={patch.id} patch={patch} midi={this.props.midi} />;
    });

    return (
      <ul className="patches">
        {patches}
      </ul>
    );
  }
}

PatchList.propTypes = {
  midi: React.PropTypes.shape({
    access: React.PropTypes.object,
    input: React.PropTypes.object,
    output: React.PropTypes.object,
    status: React.PropTypes.string
  }).isRequired
};


export default withMidi(PatchList, { sysex: true });
