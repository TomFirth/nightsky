const PiCamera = require('pi-camera');
const utils = require('utils');

const photoDir = './videos';

const myCamera = new PiCamera({
  mode: 'video',
  output: `./${photoDir}/${utils.currentDateTime()}.h264`,
  width: 1920,
  height: 1080,
  timeout: 5000,
  nopreview: true,
});

export function snap() {
  myCamera.record()
  .then(res => {
    console.log(`Photo taken at ${utils.currentDateTime()}`);
  })
  .catch(error => {
    console.error(error)
  });
}