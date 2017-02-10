export default () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const canvas = document.querySelector('.oscilloscope');
  const canvasContext = canvas.getContext('2d');

  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const oscillator = audioContext.createOscillator();
  const oscillatorTypes = ['sine', 'square', 'sawtooth', 'triangle'];
  oscillator.frequency.value = 100;
  oscillator.type = 'sawtooth';
  oscillator.connect(analyser);
  oscillator.start();

  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;

  function drawOscilloscope() {
    const draw = requestAnimationFrame(drawOscilloscope);

    analyser.getByteTimeDomainData(dataArray);

    canvasContext.fillStyle = 'rgb(0, 0, 0)';
    canvasContext.fillRect(0, 0, WIDTH, HEIGHT);

    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = 'rgb(255,255,255)';

    canvasContext.beginPath();

    const sliceWidth = WIDTH * 1.0 / bufferLength;
    let x = 0;

    for(let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * HEIGHT/2;

      if (i === 0) {
        canvasContext.moveTo(x,y);
      } else {
        canvasContext.lineTo(x,y);
      }

      x += sliceWidth;
    }

    canvasContext.lineTo(canvas.width, canvas.height/2);
    canvasContext.stroke();

    setInterval(() => oscillator.type = oscillatorTypes[Math.floor(Math.random() * oscillatorTypes.length)], 5000)
  }

  drawOscilloscope();
};
