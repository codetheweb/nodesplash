import test from 'ava';
import makeAnnouncementLines from './announcement';

test('message without expiration', t => {
  const lines = makeAnnouncementLines('hello world');

  t.deepEqual(lines, ['📣 hello world', '']);
});

test('expired message', t => {
  const lines = makeAnnouncementLines('hello world', new Date(), new Date(0));

  t.is(lines, null);
});

test('non expired message', t => {
  const lines = makeAnnouncementLines('hello world', new Date(0), new Date(1));

  t.deepEqual(lines, ['📣 hello world', '']);
});
