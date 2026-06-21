// build.ts
await Bun.build({
  entrypoints: ['./index.ts'],
  outdir: './dist',
  target: 'node', // Options: 'browser' (default), 'node', or 'bun'
  banner: '#!/usr/bin/env node',
});
