const url = require('url');

const { URL } = url;    // 구조분해 할당
const myUrl = new URL('https://www.google.com/search?q=git&oq=git&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDISCAEQLhgnGMcBGNEDGIAEGIoFMgoIAhAAGLEDGIAEMgcIAxAAGIAEMgoIBBAAGLEDGIAEMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMgoIBxAAGLEDGIAEMgoICBAAGLEDGIAE0gEIMjA1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8');

// console.log('url ==>> ',url);
console.log('URL ==>> ',URL);
console.log('myUrl', myUrl);
console.log('url.format()', url.format(myUrl));



