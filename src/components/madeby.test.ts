import test from 'ava';
import makeMadeByLines from './madeby';

test('single author', t => {
  const lines = makeMadeByLines({
    madeByPrefix: 'wrote by ',
    authors: ['quentin'],
    lineLength: 15,
    separator: '='
  });

  t.deepEqual(lines, [
    '== wrote by ===',
    '=== quentin ==='
  ]);
});

test('3 authors', t => {
  const lines = makeMadeByLines({
    madeByPrefix: 'wrote by ',
    authors: ['quentin', 'quentinou', 'quintin'],
    lineLength: 30,
    separator: '='
  });

  t.deepEqual(lines, [
    '===== wrote by quentin, ======',
    '=== quentinou and quintin ===='
  ]);
});
