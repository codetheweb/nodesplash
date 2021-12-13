import test from 'ava';
import makeTitleLines from './title';

test('title with repo and authors', t => {
  const lines = makeTitleLines({
    separator: '=',
    lineLength: 40,
    repository: 'unit test',
    madeByPrefix: 'made by ',
    authors: ['author1', 'author2', 'author3']
  });

  t.deepEqual(lines, [
    '========================================',
    '========================================',
    '============== unit test ===============',
    '========================================',
    '===== made by author1, author2 and =====',
    '=============== author3 ================',
    '========================================',
    '========================================'
  ]);
});

test('title without authors', t => {
  const lines = makeTitleLines({
    separator: '=',
    lineLength: 40,
    repository: 'unit test',
    madeByPrefix: 'made by ',
    authors: []
  });

  t.deepEqual(lines, [
    '========================================',
    '========================================',
    '============== unit test ===============',
    '========================================',
    '========================================'
  ]);
});

test('emojis', t => {
  const lines = makeTitleLines({
    separator: '=',
    lineLength: 40,
    repository: 'unit ❤️ test',
    madeByPrefix: '❤️ made ❤️ by ❤️ ',
    authors: ['author1', 'author2', 'author3']
  });

  t.deepEqual(lines, [
    '========================================',
    '========================================',
    '============= unit ❤️ test =============',
    '========================================',
    '====== ❤️ made ❤️ by ❤️ author1, ======',
    '========= author2 and author3 ==========',
    '========================================',
    '========================================'
  ]);
});
