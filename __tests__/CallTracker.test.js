const CallTracker = require('../lib/CallTracker');

describe('CallTracker', function () {
  const tracker = new CallTracker({
    proxyToNumber: 'proxyToNumber',
  });

  const from = '555';
  const to = '999';
  const ncco = tracker.answer(from, to);

  test('should create an NCCO with one elements', function() {
    const { action, from, endpoint } = ncco[0];

    expect(ncco).toHaveLength(1);
    expect(action).toBe('connect');
    expect(from).toEqual(from);
    expect(endpoint).toHaveLength(1);

    const { type, number } = endpoint[0];

    expect(type).toBe('phone');
    expect(number).toEqual(tracker.config.proxyToNumber);
  });
});
