import withMidi from './with-midi';

const MidiWarning = (props) => {
  const show = props.midi.status !== 'available';

  if (show) return (
    <div className="warning">
      Your browser doesn't seem to support web MIDI...that's a goddamn shame
    </div>
  )
}

export default withMidi(MidiWarning);
