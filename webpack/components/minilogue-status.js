import React from 'react';
import withMidi from './with-midi';

class MinilogueStatus extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default withMidi(MinilogueStatus, { sysex: true });
