import { oklch, rgba } from './colors.js'

export const colors = ({
  legacy = typeof process === 'undefined' || !process.env.NODE_ENV
} = {}): Colors => (legacy ? rgba : oklch)

type Colors = Simplify<
  {
    inherit: string
    current: string
    transparent: string
    black: string
    white: string
  } & Record<
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
    | 'sand'
    | 'olive'
    | 'mauve',
    Simplify<
      Record<
        | '50'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900'
        | '950',
        string
      >
    >
  >
>

type Simplify<T> = { [K in keyof T]: T[K] } & {}
