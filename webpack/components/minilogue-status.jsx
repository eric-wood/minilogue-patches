import React from 'react';
import withMidi, { propTypes as midiPropTypes } from './with-midi';

const MinilogueStatus = () => {
  return (
    <div />
  );
};

MinilogueStatus.propTypes = {
  midi: midiPropTypes.isRequired
};

export default withMidi(MinilogueStatus, { sysex: true });
