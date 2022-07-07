# ModelSword

Alternative front-end for [ModelSaber](https://modelsaber.com/).


## Motivation

The current front-end for ModelSaber is outdated, and has an annoying pagnation problem.  
It doesn't store the previous pagnation number, so you get sent back whenever you navigate between the pages.

## Developing

Once you've cloned the repo a and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
