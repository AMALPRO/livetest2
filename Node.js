const express = require('express');
const m3u8stream = require('m3u8stream');
const app = express();

app.get('/stream', (req, res) => {
    const stream = m3u8stream('http://your-m3u8-url');
    stream.pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
