import React from 'react';
import withMidi from './with-midi';

const MidiWarning = (props) => {
  const show = props.midi.status !== 'available';

  if (show) {
    return (
      <div className="warning">
        Your browser doesnt seem to support web MIDI...thats a goddamn shame
      </div>
    );
  }

  return <div />;
};

MidiWarning.propTypes = {
  midi: React.PropTypes.object.isRequired
};

export default withMidi(MidiWarning);
