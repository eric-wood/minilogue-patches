import React from 'react';
import withMidi from './with-midi';

const MinilogueStatus = () => {
  return (
    <div />
  );
};

export default withMidi(MinilogueStatus, { sysex: true });
