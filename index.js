const http = require('http');
const fs = require('fs');
const path = require('path');
const CronJob = require('cron').CronJob;

const photo = require('./src/photo')

const hostname = '127.0.0.1';
const port = 3000;
const directory = './photos';

const server = http.createServer((req, res) => {
  photoCron()
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  getDir(res)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function getDir(res) {
  fs.readdir(directory, (error, files) => {
    if (error) console.error(error)
    let body = ""
    files.forEach(file => {
      let fileDetails = fs.lstatSync(path.resolve(directory, file));
      if (fileDetails.isDirectory()) {
        body += 'Directory: ' + file + '\r\n';
      } else {
        body += file + '\r\n';
      }
    });
    res.end(body)
  });
}

function photoCron() {
  const job = new CronJob(
    '0 */15 18-23,0-6 * * *',
    function() {
      photo.snap()
    }
  );
  job.start()
}