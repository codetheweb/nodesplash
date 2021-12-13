import {Except} from 'type-fest';

export enum Format {
  Default
}

export interface Settings {
  // Formatting settings
  format?: Format;
  lineLength?: number;
  separator?: string;
  madeByPrefix?: string;
  now?: Date;

  // Project information
  rootURL?: string;
  user?: string;
  repository?: string;
  authors?: string[];
  emails?: string[];

  // Program information
  version?: string;
  commit?: string;
  buildDate?: Date;
  announcement?: string;
  announceExp?: Date;

  // Sponsor information
  paypalUser?: string;
  githubSponsor?: string;
}

type AlwaysOptionalParams = 'user' | 'repository' | 'buildDate' | 'announceExp' | 'paypalUser' | 'githubSponsor';

export type SettingsWithPopulatedDefaults = Required<Except<Settings, AlwaysOptionalParams>> & Pick<Settings, AlwaysOptionalParams>;
