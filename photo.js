const PiCamera = require('pi-camera');

const photoDir = './photos'

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
currentDateTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes

if (process.env.ONE) snap()

const myCamera = new PiCamera({
  mode: 'photo',
  output: `./${photoDir}/${currentDateTime}.jpg`,
  width: 1920,
  height: 1080,
  nopreview: true,
});

export function snap() {
  myCamera.snap()
  .then(res => {
    console.log(`Photo taken at ${currentDateTime}`);
  })
  .catch(error => {
    console.error(error)
  });
}