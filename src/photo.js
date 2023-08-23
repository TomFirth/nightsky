const PiCamera = require('pi-camera');
const utils = require('utils');

const photoDir = './photos'

if (process.env.ONE) snap()

const myCamera = new PiCamera({
  mode: 'photo',
  output: `./${photoDir}/${utils.currentDateTime()}.jpg`,
  width: 1920,
  height: 1080,
  nopreview: true,
});

export function snap() {
  myCamera.snap()
  .then(res => {
    console.log(`Photo taken at ${utils.currentDateTime()}`);
  })
  .catch(error => {
    console.error(error)
  });
}