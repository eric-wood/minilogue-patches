import React from 'react';
import ReactDOM from 'react-dom';
import PatchList from './components/patch-list';
import MidiWarning from './components/midi-warning';
import MinilogueStatus from './components/minilogue-status';
import oscilloscope from './oscilloscope';

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  oscilloscope();
  ReactDOM.render(<PatchList />, document.querySelector('#patch-list'));
  ReactDOM.render(<MidiWarning />, document.querySelector('#midi-info'));
  ReactDOM.render(<MinilogueStatus />, document.querySelector('#minilogue-status'));
});
