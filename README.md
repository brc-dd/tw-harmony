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
    colors
  }
} satisfies Config
```

Note that the light blue color is renamed to "sky" to avoid space in class names.

Also, for this to work properly on older browsers, you will need to add [`@csstools/postcss-oklab-function`](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-oklab-function) plugin to your PostCSS config:

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

## License

MIT

Used Harmony color palette is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) by [Evil Martians](https://evilmartians.com/).
