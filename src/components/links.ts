import {Settings} from '../types.js';

const makeSponsorLine = (paypalUser?: string, githubSponsor?: string) => {
  if (!paypalUser && !githubSponsor) {
    return '';
  }

  let line = '💰 Help me?';
  if (paypalUser) {
    line += ' https://www.paypal.me/' + paypalUser;
  }

  if (githubSponsor) {
    line += ' https://github.com/sponsors/' + githubSponsor;
  }

  return line;
};

const makeLinksLines = ({
  rootURL,
  user,
  repository,
  emails,
  paypalUser,
  githubSponsor
}: Partial<Settings>) => {
  const lines = [];

  if (rootURL && user && repository) {
    const repoURL = `${rootURL}/${user}/${repository}`;
    lines.push(
      '🔧 Need help? ' + repoURL + '/discussions/new',
      '🐛 Bug? ' + repoURL + '/issues/new',
      '✨ New feature? ' + repoURL + '/issues/new',
      '☕ Discussion? ' + repoURL + '/discussions/new'
    );
  }

  if (emails && emails.length > 0) {
    lines.push(
      '💻 Email? ' + emails.join(', ')
    );
  }

  const sponsorLine = makeSponsorLine(paypalUser, githubSponsor);

  if (sponsorLine !== '') {
    lines.push(sponsorLine);
  }

  return lines;
};

export default makeLinksLines;
