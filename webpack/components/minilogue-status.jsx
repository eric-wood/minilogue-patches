import React from 'react';
import withMidi, { propTypes as midiPropTypes } from './with-midi';

const MinilogueStatus = (props) => {
  let status;

  switch (props.midi.status) {
    case 'available':
      status = props.midi.input ? 'connected' : 'disconnected';
      break;
    case 'unavailable':
      status = 'disconnected (web midi not supported)'; // TODO: elaborate
      break;
    case 'declined':
      status = 'disconnected (web midi sysex not allowed)';
      break;
    case 'pending':
      status = 'connecting...';
      break;
    default:
      status = '';
  }

  return (
    <div>
      Minilogue: {status}
    </div>
  );
};

MinilogueStatus.propTypes = {
  midi: midiPropTypes.isRequired
};

export default withMidi(MinilogueStatus, { sysex: true });
