export default {
  INPUT_NAME: 'minilogue KBD/KNOB',
  OUTPUT_NAME: 'minilogue SOUND',
  HEADER: [0xF0,0x42,0x30,0x00,0x01,0x2C],
  CURRENT_PATCH_REQUEST: [0x0E,0xF7],

  getInput(midiAccess) {
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
  getOutput(midiAccess) {
    var result;
    midiAccess.outputs.forEach((output) => {
      if(output.name === this.OUTPUT_NAME) {
        result = output;
      }
    });

    return result;
  },

  requestPatch(output) {
    // stream of magic bytes, just take my word of it
    output.addEventListener('midimessage', (message) => {
      console.log(message.data);
    });

    this.output.send(this.HEADER.concat(this.CURRENT_PATCH_REQUEST));
  },

  uploadPatch(output, patch) {
    // idk do this later or somethin
    this.output.send();
  },

  parsePatch(data) {
    // TODO: Some basic patch parsing to go here.
    // First step will be auto-filling the patch name from this data
  }
};
