import {Settings} from '../types';
import {getLeftRightCounts, splitStringVertically} from '../utils';

const maxContentLengthPercent = 0.75;

export type RequiredParams = 'madeByPrefix' | 'authors' | 'lineLength' | 'separator';

const makeMadeByLines = ({
  madeByPrefix,
  authors,
  lineLength,
  separator
}: Required<Pick<Settings, RequiredParams>>) => {
  if (authors.length === 0) {
    return null;
  }

  let str = madeByPrefix;

  for (const [i, author] of authors.entries()) {
    if (i === 0) {
      str += author;
    } else if (i < authors.length - 1) {
      str += `, ${author}`;
    } else {
      str += ` and ${author}`;
    }
  }

  const maxContentLength = lineLength * maxContentLengthPercent;

  const lines = [];

  for (const line of splitStringVertically(str, maxContentLength)) {
    const spacedLine = ` ${line} `;
    const [left, right] = getLeftRightCounts(lineLength, spacedLine);
    lines.push(`${separator.repeat(left)}${spacedLine}${separator.repeat(right)}`);
  }

  return lines;
};

export default makeMadeByLines;
