const express = require('express');
const m3u8stream = require('m3u8stream');
const app = express();

app.get('/', (req, res) => {
    const stream = m3u8stream('https://prod-ent-live-gm.jiocinema.com/hls/live/2100299/hd_akamai_androidmob_avc_eng_ipl_s1_m1250424/master.m3u8');
    stream.pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
