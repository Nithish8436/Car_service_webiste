const https = require('https');

const url = 'https://maps.app.goo.gl/LRuAU8aYPvBc7Hq26';

function getRedirect(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(res.headers.location);
      } else {
        // Collect data to find coordinates in the page if not redirected via header
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }
    }).on('error', reject);
  });
}

async function start() {
  try {
    let currentUrl = url;
    console.log(`Resolving ${currentUrl}...`);
    
    // Sometimes takes a few hops
    for (let i = 0; i < 3; i++) {
       const result = await getRedirect(currentUrl);
       if (result.startsWith('http')) {
         currentUrl = result;
         console.log(`Hop ${i+1}: ${currentUrl}`);
         if (currentUrl.includes('@')) {
           break;
         }
       } else {
         // It's the page body
         const match = result.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
         if (match) {
           console.log(`Found in body: ${match[1]}, ${match[2]}`);
         }
         break;
       }
    }
    
    const finalMatch = currentUrl.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    if (finalMatch) {
      console.log(`SUCCESS: ${finalMatch[1]}, ${finalMatch[2]}`);
    } else {
      console.log("Could not find coordinates in final URL: " + currentUrl);
    }
  } catch (e) {
    console.error(e);
  }
}

start();
