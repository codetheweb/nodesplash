import GraphemeSplitter from 'grapheme-splitter';
import {Settings, SettingsWithPopulatedDefaults, Format} from './types';

const nonASCIIVisualSize = 2.5;

export const getVisualLength = (str: string) => {
  const splitter = new GraphemeSplitter();
  let len = 0;
  let nonASCII = 0;
  for (const char of splitter.splitGraphemes(str)) {
    if (char.length > 1) {
      nonASCII++;
    } else {
      len++;
    }
  }

  len += (nonASCII * nonASCIIVisualSize);

  return Math.floor(len);
};

export const splitStringVertically = (str: string, maxLength: number) => {
  let currentLine = '';
  const lines: string[] = [];

  for (const word of str.split(' ')) {
    if (currentLine === '') {
      currentLine = word;
    } else if (currentLine.length + word.length >= maxLength) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine += ` ${word}`;
    }
  }

  return [...lines, currentLine];
};

export const getLeftRightCounts = (len: number, str: string) => {
  const middleLength = getVisualLength(str);

  if (middleLength > len - 1) {
    return [0, 0];
  }

  const leftAndRightCount = len - middleLength;
  const left = leftAndRightCount / 2;
  let right = leftAndRightCount / 2;
  if (leftAndRightCount % 2 !== 0) {
    right++;
  }

  return [left, right];
};

export const getDefaultsFor = (settings: Settings): SettingsWithPopulatedDefaults => {
  let authors = settings.authors;

  if (!authors && settings.user) {
    authors = [`${settings.rootURL ?? 'https://github.com'}/${settings.user}`];
  } else if (!authors) {
    authors = [];
  }

  return {
    format: settings.format ?? Format.Default,
    lineLength: settings.lineLength ?? 40,
    separator: settings.separator ?? '=',
    madeByPrefix: settings.madeByPrefix ?? 'Made with ❤️ by ',
    now: settings.now ?? new Date(),

    rootURL: settings.rootURL ?? 'https://github.com',
    user: settings.user,
    repository: settings.repository,
    authors,
    emails: settings.emails ?? [],

    version: settings.version ?? 'unknown',
    commit: settings.commit ?? 'unknown',
    buildDate: settings.buildDate,
    announcement: settings.announcement ?? '',
    announceExp: settings.announceExp,

    paypalUser: settings.paypalUser,
    githubSponsor: settings.githubSponsor
  };
};
