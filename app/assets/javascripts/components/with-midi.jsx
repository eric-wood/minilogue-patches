function withMidi(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      hasMidi = Boolean(navigator.requestMIDIAccess);

      this.state = {
        access: undefined,
        input: undefined,
        output: undefined,
        status: hasMidi ? 'pending' : 'unavailable'
      };

      this.refreshIO = this.refreshIO.bind(this);
      this.requestSuccess = this.requestSuccess.bind(this);
      this.requestFailure = this.requestFailure.bind(this);

      if(hasMidi) {
        navigator.requestMIDIAccess({ sysex: props.sysex })
          .then(this.requestSuccess, this.requestFailure);
      }
    }

    requestSuccess(access) {
      access.onstatechange = this.refreshIO;

      this.setState({
        access,
        status: 'available'
      });

      this.refreshIO();
    }

    refreshIO() {
      this.setState({
        input: window.MIDI.getInput(this.state.access),
        output: window.MIDI.getOutput(this.state.access)
      });
    }

    requestFailure(error) {
      this.setState({
        status: 'declined'
      });
    }

    render() {
      return <WrappedComponent midi={this.state} {...this.props} />;
    }
  };
};
