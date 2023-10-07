import { oklch, rgb } from './colors.js'

export const colors = ({
  legacy = typeof process === 'undefined' || !process.env.NODE_ENV
} = {}): Colors => (legacy ? rgb : oklch)

type Colors = {
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
