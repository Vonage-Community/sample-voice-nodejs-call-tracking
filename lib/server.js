require('dotenv').config();

const app = require('express')();
const CallTracker = require('./CallTracker');

app.set('port', process.env['PORT'] || 5000);
app.use(require('body-parser').json());

app.listen(app.get('port'), function() {
  console.log('Example app listening on port', app.get('port'));
});

const callTracker = new CallTracker({
  proxyToNumber: process.env['PROXY_TO_NUMBER'],
});

/**
 * Serve the index view
 */
app.get('/', (req, res) => {
  res.send('Hello Vonage');
});
/**
 * Webhook endpoint to handle a call being answered.
 * Return an NCCO to record a call and proxy it to another number.
 */
app.get('/track-call', (req, res) => {
  const from = req.query.from;
  const to = req.query.to;
  
  const ncco = callTracker.answer(from, to);
  return res.json(ncco);
});

/**
 * Handle voice event webhooks
 */
app.post('/event', (req, res) => {
  console.log(req.body);
  res.send(200);
});

app.get('/tracked-calls', (req, res) => {
  res.json(callTracker.trackedCalls);
});
