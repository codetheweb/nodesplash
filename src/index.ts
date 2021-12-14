import type {Settings, SettingsWithPopulatedDefaults} from './types';
import {Format} from './types.js';
import makeTitleLines from './components/title.js';
import {getDefaultsFor} from './utils.js';
import makeAnnouncementLines from './components/announcement.js';
import makeLinksLines from './components/links.js';

/**
 *
 * @param settings
 */
export const makeLines = (settings: Settings) => {
  const settingsWithDefaults = getDefaultsFor(settings);

  const titleLines = makeTitleLines(settingsWithDefaults);

  const versionStr = `Running version ${settingsWithDefaults.version} built on ${settingsWithDefaults.buildDate ? settingsWithDefaults.buildDate.toLocaleDateString() : 'unknown date'} (commit ${settingsWithDefaults.commit})`;

  const announcementLines = makeAnnouncementLines(settings.announcement ?? '', settings.now, settings.announceExp);

  const linksLines = makeLinksLines(settingsWithDefaults);

  const lines = [
    ...titleLines,
    '',
    versionStr,
    '',
    ...(announcementLines ?? []),
    ...linksLines
  ];

  return lines;
};

// Re-export types
export type {
  Settings,
  SettingsWithPopulatedDefaults
};
export {Format};
