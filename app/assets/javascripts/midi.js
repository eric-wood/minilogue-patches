window.MIDI = {
  INPUT_NAME: 'minilogue KBD/KNOB',
  OUTPUT_NAME: 'minilogue SOUND',
  supportsMIDI: !!navigator.requestMIDIAccess,
  renderNoMIDIMessage: function() {
    console.error("Your browser doesn't support Web MIDI and that is unfortunate :(");
  },
  requestMIDI: function() {
    if(!this.supportsMIDI) {
      this.renderNoMIDIMessage();
      return;
    }

    return navigator.requestMIDIAccess().then((midiAccess) => {
      window.midiAccess = midiAccess;
      this.input = this.getInput(midiAccess);
      this.output = this.getOutput(midiAccess);
    });
  },
  requestSysex: function() {
    if(!this.supportsMIDI) {
      this.renderNoMIDIMessage();
      return;
    }

    // TODO: display info message re: permissions

    return navigator.requestMIDIAccess({
      sysex: true
    }).then(function(midiAccess) {
      window.midiAccess = midiAccess;
    });
  },

  getInput: function(midiAccess) {
    /*
     * NOTE: is there a more reliable way to go about this?
     * If Korg ever changes the IO names things will get pretty weird.
     * The ID appears device-specific, but then again I only have one Minilogue to test with...
     */
    var result;
    midiAccess.inputs.forEach((input) => {
      if(input.name === this.INPUT_NAME) {
        result = input;
      }
    });

    return result;
  },
  getOutput: function(midiAccess) {
    var result;
    midiAccess.outputs.forEach((output) => {
      if(output.name === this.OUTPUT_NAME) {
        result = output;
      }
    });

    return result;
  },

  requestPatch: function() {
    // stream of magic bytes, just take my word of it
    this.output.send([0xF0,0x42,0x30,0x00,0x01,0x2C,0x0E,0xF7]);
  },

  parsePatch: function(data) {
    // TODO: Some basic patch parsing to go here.
    // First step will be auto-filling the patch name from this data
  }
};

MIDI.requestMIDI(); // get the midiAccess info ASAP for later use
