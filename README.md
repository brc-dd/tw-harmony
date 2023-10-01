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

### Differences from the original palette

The light blue color is renamed to "sky" to align with Tailwind's naming convention.

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

Lightning CSS and the oxide engine are not supported yet as the former doesn't support generating fallbacks when alpha channel is a variable.

### IntelliSense

You'll get IntelliSense and color previews in VS Code without any additional setup. Just make sure you have the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension installed. No setup is required for JetBrains IDEs either.

Note that, there might be differences between the generated previews and the actual colors as the colors shown in previews are transformed to sRGB.

## License

MIT

Used Harmony color palette is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) by [Evil Martians](https://evilmartians.com/).
