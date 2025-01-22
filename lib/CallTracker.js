/**
 * Create a new instance of a CallTracker.
 *
 * @param {Object} config - CallTracker configuration.
 */
class CallTracker {

  config;

  trackedCalls;

  constructor(config) {
    this.config = config;

    this.trackedCalls = {};
  }

  /**
 * Track the call and return an NCCO that proxies a call.
 */
  answer (from, to) {
    if(!this.trackedCalls[to]) {
      this.trackedCalls[to] = [];
    }

    this.trackedCalls[to].push({
      timestamp: Date.now(),
      from: from,
    });

    return [
      {
        action: 'connect',
        from: to,
        endpoint: [
          {
            type: 'phone',
            number: this.config.proxyToNumber,
          },
        ],
      },
    ];
  };
}


module.exports = CallTracker;
