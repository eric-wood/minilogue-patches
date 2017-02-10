import React from 'react';
import ReactDOM from 'react-dom';
import PatchList from './components/patch-list';
import oscilloscope from './oscilloscope';

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  oscilloscope();
  ReactDOM.render(<PatchList />, document.querySelector('#patch-list'))
});
