
const express = require('express');
const m3u8stream = require('m3u8stream');
const app = express();

app.get('/', (req, res) => {
  const stream = m3u8stream('https://prod-ent-live-gm.jiocinema.com/hls/live/2100299/hd_akamai_androidmob_avc_eng_ipl_s1_m1250424/master.m3u8', {
    requestOptions: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0'
      }
    }
  });

  stream.on('error', (err) => {
    console.error('Error streaming HLS:', err);
    res.status(500).send('Error streaming video'); // Send error response to client
  });

  stream.pipe(res);
});
