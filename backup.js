/* eslint-disable prefer-template, arrow-body-style, no-console */
const { SiteClient } = require('datocms-client');
const fs = require('fs');
const path = require('path');
const request = require('request');

const client = new SiteClient(process.env.API_TOKEN);

console.log('Downloading records...');

client.items
  .all({}, { allPages: true })
  .then(response => {
    fs.writeFileSync('records.json', JSON.stringify(response, null, 2));
  })
  .then(() => client.site.find())
  .then(site => {
    client.uploads.all({}, { allPages: true }).then(uploads => {
      return uploads.reduce((chain, upload) => {
        return chain.then(() => {
          return new Promise(resolve => {
            const imageUrl = 'https://' + site.imgixHost + upload.path;
            console.log(`Downloading ${imageUrl}...`);

            const stream = fs.createWriteStream(
              './' + path.basename(upload.path),
            );
            stream.on('close', resolve);
            request(imageUrl).pipe(stream);
          });
        });
      }, Promise.resolve());
    });
  });

console.log('Done!');
