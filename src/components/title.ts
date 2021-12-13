import {Settings} from '../types';
import {getLeftRightCounts} from '../utils';
import makeMadeByLines, {RequiredParams as MadeByRequiredParams} from './madeby';

type RequiredParams = MadeByRequiredParams;

const makeTitleLines = ({
  separator,
  lineLength,
  repository,
  madeByPrefix,
  authors
}: Required<Pick<Settings, RequiredParams>> & Pick<Settings, 'repository'>) => {
  const separatorLine = separator.repeat(lineLength);

  const lines = [separatorLine, separatorLine];

  if (repository) {
    const projectNameWithSpaces = ` ${repository} `;
    const [left, right] = getLeftRightCounts(lineLength, projectNameWithSpaces);
    const projectNameLine = `${separator.repeat(left)}${projectNameWithSpaces}${separator.repeat(right)}`;

    lines.push(projectNameLine, separatorLine);
  }

  const madeByLines = makeMadeByLines({
    madeByPrefix,
    authors,
    lineLength,
    separator
  });

  if (madeByLines && madeByLines.length > 0) {
    lines.push(...madeByLines, separatorLine);
  }

  lines.push(separatorLine);

  return lines;
};

export default makeTitleLines;
