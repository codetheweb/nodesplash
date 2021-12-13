import test from 'ava';
import makeLinksLines from './links';

test('repo information', t => {
  const lines = makeLinksLines({
    rootURL: 'https://github.com',
    user: 'qdm12',
    repository: 'gosplash'
  });

  t.deepEqual(lines, [
    '🔧 Need help? https://github.com/qdm12/gosplash/discussions/new',
    '🐛 Bug? https://github.com/qdm12/gosplash/issues/new',
    '✨ New feature? https://github.com/qdm12/gosplash/issues/new',
    '☕ Discussion? https://github.com/qdm12/gosplash/discussions/new'
  ]);
});

test('emails', t => {
  const lines = makeLinksLines({
    emails: ['quentin.mcgaw@gmail.com', 'a@a.com']
  });

  t.deepEqual(lines, [
    '💻 Email? quentin.mcgaw@gmail.com, a@a.com'
  ]);
});

test('sponsor information', t => {
  const lines = makeLinksLines({
    paypalUser: 'qmcgaw',
    githubSponsor: 'qdm12'
  });

  t.deepEqual(lines, [
    '💰 Help me? https://www.paypal.me/qmcgaw https://github.com/sponsors/qdm12'
  ]);
});
