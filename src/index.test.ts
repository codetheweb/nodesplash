import test from 'ava';
import {Format, makeLines} from '.';

test('empty settings', t => {
  const lines = makeLines({});

  t.deepEqual(lines, [
    '========================================',
    '========================================',
    '========================================',
    '',
    'Running version unknown built on unknown date (commit unknown)',
    ''
  ]);
});

test('filled settings', t => {
  const lines = makeLines({
    format: Format.Default,
    lineLength: 50,
    separator: '=',
    user: 'qdm12',
    repository: 'gosplash',
    emails: ['quentin.mcgaw@gmail.com'],
    version: 'v1.1.1',
    commit: 'c892ef2',
    buildDate: new Date('7/13/2021'),
    announcement: 'hello world',
    announceExp: new Date(1),
    now: new Date(0),
    paypalUser: 'qmcgaw',
    githubSponsor: 'qdm12'
  });

  t.deepEqual(lines, [
    '==================================================',
    '==================================================',
    '==================== gosplash ====================',
    '==================================================',
    '================ Made with ❤️ by =================',
    '============ https://github.com/qdm12 ============',
    '==================================================',
    '==================================================',
    '',
    'Running version v1.1.1 built on 7/13/2021 (commit c892ef2)',
    '',
    '📣 hello world',
    '',
    '🔧 Need help? https://github.com/qdm12/gosplash/discussions/new',
    '🐛 Bug? https://github.com/qdm12/gosplash/issues/new',
    '✨ New feature? https://github.com/qdm12/gosplash/issues/new',
    '☕ Discussion? https://github.com/qdm12/gosplash/discussions/new',
    '💻 Email? quentin.mcgaw@gmail.com',
    '💰 Help me? https://www.paypal.me/qmcgaw https://github.com/sponsors/qdm12'
  ]);
});
