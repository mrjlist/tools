const axios = require('axios');
const tools = require('./index');

const log = tools.logger('trace');

const NOTIFY_URL = '';
const TIMER_WAIT = 2000;
const DEBUG = false;

let job = null;
let array = {};

// ==============================================
function notify(param, url) {
  if (DEBUG) log.trace(`[ ] onEvent: ${param}`);

  let address = NOTIFY_URL;
  if (url && typeof url === 'string' && url.startsWith('https://')) address = url;

  const txt = tools.textify(param, { colors: false });
  array[txt] = array[txt] +1 || 1;

  if (job) clearTimeout(job);
  job = setTimeout(() => onTimer(address), TIMER_WAIT);
}

// ==============================================
function onTimer(url) {

  if (DEBUG) log.trace('[+] notify: sending array');
  if (DEBUG) log.trace(array);

  Object.keys(array).forEach((key) => {
    let text = key;
    if (array[key] > 1) text += ` [count: ${array[key]}]`;

    if (DEBUG) log.trace(`[ ] sending text: ${text}`);
    const payload = { txt: text };

    // ready? send!
    try {
      axios.post(url, payload);
    }
    catch (err) {
      if (DEBUG) log.error(`[-] notify error: ${err.message}`);
    }
  });

  array = {};
}


module.exports.notify = notify;
