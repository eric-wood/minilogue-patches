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
  midi: React.PropTypes.shape({
    access: React.PropTypes.object,
    input: React.PropTypes.object,
    output: React.PropTypes.object,
    status: React.PropTypes.string
  }).isRequired
};

export default withMidi(MidiWarning);
