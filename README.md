# tw-Harmony

A Tailwind CSS port of the [Harmony color palette](https://www.figma.com/community/file/1287828769207775946).

## Installation

```sh
npm add -D tw-harmony
```

## Usage

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'
import { colors } from 'tw-harmony'

export default {
  theme: {
    colors: colors()
  }
} satisfies Config
```

## Notes

### Compatibility

For this to work properly on not-so-modern browsers, you'll need to add [`@csstools/postcss-oklab-function`](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-oklab-function) plugin to your PostCSS config:

```sh
npm add -D @csstools/postcss-oklab-function
```

```js
// postcss.config.js
import tailwindcss from 'tailwindcss'
import oklab from '@csstools/postcss-oklab-function'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [tailwindcss(), oklab({ preserve: true }), autoprefixer()]
}
```

Non-PostCSS setups like Lightning CSS, the oxide engine, Tailwind CLI, Play CDN, Tailwind Play, etc. don't properly generate fallbacks. So, you'll need to call the `color` method with the `legacy` option set to `true`:

```ts
export default {
  theme: {
    colors: colors({ legacy: true })
  }
}
```

### IntelliSense

You'll get IntelliSense and color previews in VS Code without any additional setup. Just make sure you have the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension installed. No setup is required for JetBrains IDEs either.

Note that, there might be slight differences between the generated previews and the actual colors as the colors shown in previews are transformed to sRGB.

### Differences from [`@evilmartians/harmony`](https://github.com/evilmartians/harmony)

- `@evilmartians/harmony` is the official port of the Harmony color palette. `tw-harmony` is not affiliated with Evil Martians in any way.
- `@evilmartians/harmony` was not published at the time I wrote `tw-harmony`. But since it's now available, you can use it instead if you want to.
- `@evilmartians/harmony` does not provide legacy output so color previews won't work in VS Code and JetBrains IDEs while using it.
- `@evilmartians/harmony`'s colors are more precise than what they have published in the Figma file. So, it might look slightly better than `tw-harmony` in some cases.
- `@evilmartians/harmony` provides base colors as well. `tw-harmony` only provide Tailwind CSS compatible notations.

## License

MIT

Used Harmony color palette is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) by [Evil Martians](https://evilmartians.com/).

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/brc-dd/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/brc-dd/static/sponsors.svg'/>
  </a>
</p>
