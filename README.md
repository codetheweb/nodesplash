# 🌊 NodeSplash [![codecov](https://codecov.io/gh/codetheweb/nodesplash/branch/master/graph/badge.svg?token=BXZ22G570I)](https://codecov.io/gh/codetheweb/nodesplash)

Library to show log lines at the start of a program.

Direct port of [qdm12](https://github.com/qdm12)'s excellent [GoSplash](https://github.com/qdm12/gosplash) library.

For example, this

```typescript
import {makeLines} from "nodesplash";

console.log(makeLines({
    separator: '=',
    user: 'codetheweb',
    repository: 'nodesplash',
    emails: ['hi@maxisom.me'],
    version: 'v1.1.1',
    commit: 'c892ef2',
    buildDate: new Date('7/13/2021'),
    paypalUser: 'codetheweb',
    githubSponsor: 'codetheweb'
}).join('\n'));
```

will result in this:

```log
========================================
========================================
============== nodesplash ==============
========================================
=========== Made with ❤️ by ============
==== https://github.com/codetheweb =====
========================================
========================================

Running version v1.1.1 built on 7/13/2021 (commit c892ef2)

🔧 Need help? https://github.com/codetheweb/nodesplash/discussions/new
🐛 Bug? https://github.com/codetheweb/nodesplash/issues/new
✨ New feature? https://github.com/codetheweb/nodesplash/issues/new
☕ Discussion? https://github.com/codetheweb/nodesplash/discussions/new
💻 Email? hi@maxisom.me
💰 Help me? https://www.paypal.me/codetheweb https://github.com/sponsors/codetheweb
```

## Usage

`yarn add nodesplash` or `npm i nodesplash -s`. Then:

- `const {makeLines} = require('nodesplash')` for JavaScript or
- `import {makeLines} from 'nodesplash'` for TypeScript.

All settings:

```typescript
interface Settings {
  // Formatting settings
  lineLength?: number;   // defaults to 40
  separator?: string;    // defaults to '='
  madeByPrefix?: string; // defaults to 'Made with ❤️ by '

  // Project information
  rootURL?: string;   // defaults to https://github.com
  user?: string;
  repository?: string;
  authors?: string[]; // defaults to `${rootURL}/${user}`
  emails?: string[];

  // Program information
  version?: string;   // defaults to 'unknown'
  commit?: string;    // defaults to 'unknown'
  buildDate?: Date;   // defaults to 'unknown date'
  announcement?: string;
  announceExp?: Date; // don't include to disable expiration

  // Sponsor information
  paypalUser?: string;
  githubSponsor?: string;
}
```
