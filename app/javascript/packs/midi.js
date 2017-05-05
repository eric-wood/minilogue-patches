export const INPUT_NAME = 'minilogue KBD/KNOB';
export const OUTPUT_NAME = 'minilogue SOUND';
export const HEADER = [0xF0, 0x42, 0x30, 0x00, 0x01, 0x2C];
export const CURRENT_PATCH_REQUEST = [0x0E, 0xF7];

export const getInput = (midiAccess) => {
  /*
   * NOTE: is there a more reliable way to go about this?
   * If Korg ever changes the IO names things will get pretty weird.
   * The ID appears device-specific, but then again I only have one Minilogue to test with...
   */
  let result;
  midiAccess.inputs.forEach((input) => {
    if (input.name === INPUT_NAME) {
      result = input;
    }
  });

  return result;
};

export const getOutput = (midiAccess) => {
  let result;
  midiAccess.outputs.forEach((output) => {
    if (output.name === OUTPUT_NAME) {
      result = output;
    }
  });

  return result;
};

export const requestPatch = (output) => {
  // stream of magic bytes, just take my word of it
  output.addEventListener('midimessage', (message) => {
    console.log(message.data);
  });

  output.send(HEADER.concat(CURRENT_PATCH_REQUEST));
};

export const uploadPatch = (output, patch) => {
  // idk do this later or somethin
  output.send(HEADER);
  output.send(patch);
};
