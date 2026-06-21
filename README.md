# new-video-project

A fast CLI for filmmakers and content creators who want a clean project structure before the first cut.

[![npm version](https://img.shields.io/npm/v/new-video-project?style=for-the-badge&logo=npm&logoColor=white&color=cb3837)](https://www.npmjs.com/package/new-video-project)
[![license](https://img.shields.io/badge/license-ISC-22c55e?style=for-the-badge)](https://opensource.org/license/isc-license-txt)
[![runtime](https://img.shields.io/badge/runtime-Bun-fbbf24?style=for-the-badge&logo=bun&logoColor=111827)](https://bun.com)
[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/ikifar2012)
[![Ko-fi](https://img.shields.io/badge/Buy%20me%20a%20coffee-Ko--fi-ff5e5b?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/mathesonsteplock)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buymeacoffee&logoColor=111827)](https://buymeacoffee.com/mathesonstep)

## Why this exists

If you edit long-form videos, short-form clips, YouTube episodes, or client projects, you already know this problem:

- footage gets dropped in random folders
- exports get mixed with source media
- frame grabs and overlays disappear into chaos
- handoff to collaborators becomes painful

This CLI gives you a dependable folder system in seconds, so your timeline stays the hard part, not your file management.

## Built for creators

- YouTubers and educators
- Documentary and indie filmmakers
- Social editors (Reels, Shorts, TikTok)
- Freelance video editors managing multiple clients
- Small post teams that need consistent handoff structure

## Features

- Interactive CLI prompts
- Smart default project name with current date
- Customizable destination path
- Organized creator-first directory tree
- Separate locations for RAW media, external media, and transcoded files
- Dedicated space for multitrack audio exports from DAWs and frame exports
- Works great with Bun and npm workflows

## Folder structure created

```text
My Video Project - Sun Jun 21 2026/
├─ Assets/
│  ├─ Audio/
│  │  └─ Multitrack/
│  ├─ Images/
│  │  └─ Frames/
│  └─ Video/
│     ├─ External/
│     │  └─ Transcoded/
│     └─ RAW/
│        └─ Transcoded/
└─ Exports/
```

## How creators use it

1. Run the CLI when a new project starts.
2. Drop camera originals into `Assets/Video/RAW/`.
3. Put stock, downloads, client assets, or screen captures into `Assets/Video/External/`.
4. Save proxies/transcodes inside each `Transcoded/` folder.
5. Keep stems and VO in `Assets/Audio/Multitrack/`.
6. Store stills and frame grabs in `Assets/Images/Frames/`.
7. Deliver final versions from `Exports/`.

This keeps source media separate from deliverables and makes versioned exports easier to track.

## Quick start

### With npx (recommended)

```bash
npx new-video-project
```

### With Bun

```bash
bunx new-video-project
```

After running, the CLI asks two quick questions:

- project name (defaults to `My Video Project - <today>`)
- where to create it

## Local development

Install dependencies:

```bash
bun install
```

Build:

```bash
bun run build
```

Run the built CLI:

```bash
bun run start
```

## Scripts

- `bun run build` -> builds `index.ts` into `dist/`
- `bun run start` -> builds, then runs `dist/index.js`
- `bun run publish` -> publishes package to npm

## Tech stack

- Bun
- TypeScript
- @clack/prompts
- boxen
- picocolors

## Roadmap ideas

- Optional presets (YouTube, client work, documentary, social clips)
- Auto-create project metadata files
- Optional proxy/transcode helper setup
- Editor and DAW preset scaffolds

## Support

If this tool saves you time on a real project, you can support it here:

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20on-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/ikifar2012)
[![Ko-fi](https://img.shields.io/badge/Buy%20me%20a%20coffee-Ko--fi-ff5e5b?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/mathesonsteplock)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buymeacoffee&logoColor=111827)](https://buymeacoffee.com/mathesonstep)


## Author

Matheson Steplock
