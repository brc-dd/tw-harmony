import { formatRgb } from 'culori'

const isNode = typeof process !== 'undefined' && process?.env?.NODE_ENV != null

const rawColors = {
  red: {
    50: '98.83% 0.005 20',
    100: '96.68% 0.02 20',
    200: '92.19% 0.04 20',
    300: '86.13% 0.08 20',
    400: '80.08% 0.11 20',
    500: '74.22% 0.15 20',
    600: '62.7% 0.14 20',
    700: '53.52% 0.12 20',
    800: '41.99% 0.09 20',
    900: '30.66% 0.07 20',
    950: '19.34% 0.04 20'
  },
  orange: {
    50: '98.83% 0.005 43.33',
    100: '96.68% 0.02 43.33',
    200: '92.19% 0.04 43.33',
    300: '85.94% 0.08 43.33',
    400: '79.88% 0.11 43.33',
    500: '73.83% 0.15 43.33',
    600: '62.3% 0.14 43.33',
    700: '53.13% 0.12 43.33',
    800: '41.8% 0.09 43.33',
    900: '30.47% 0.07 43.33',
    950: '19.14% 0.04 43.33'
  },
  amber: {
    50: '98.83% 0.005 66.67',
    100: '96.68% 0.02 66.67',
    200: '91.99% 0.04 66.67',
    300: '85.74% 0.08 66.67',
    400: '79.49% 0.11 66.67',
    500: '73.24% 0.15 66.67',
    600: '61.91% 0.14 66.67',
    700: '52.73% 0.12 66.67',
    800: '41.41% 0.09 66.67',
    900: '30.27% 0.07 66.67',
    950: '19.14% 0.04 66.67'
  },
  yellow: {
    50: '98.83% 0.005 90',
    100: '96.48% 0.02 90',
    200: '91.8% 0.04 90',
    300: '85.35% 0.08 90',
    400: '78.91% 0.11 90',
    500: '72.66% 0.15 90',
    600: '61.13% 0.14 90',
    700: '52.34% 0.12 90',
    800: '41.02% 0.09 90',
    900: '30.08% 0.07 90',
    950: '19.14% 0.04 90'
  },
  lime: {
    50: '98.83% 0.005 106.67',
    100: '96.48% 0.02 106.67',
    200: '91.6% 0.04 106.67',
    300: '84.96% 0.08 106.67',
    400: '78.52% 0.11 106.67',
    500: '72.07% 0.15 106.67',
    600: '60.74% 0.14 106.67',
    700: '51.95% 0.12 106.67',
    800: '40.82% 0.09 106.67',
    900: '29.88% 0.07 106.67',
    950: '18.95% 0.04 106.67'
  },
  green: {
    50: '98.83% 0.005 123.33',
    100: '96.29% 0.02 123.33',
    200: '91.41% 0.04 123.33',
    300: '84.77% 0.08 123.33',
    400: '78.13% 0.11 123.33',
    500: '71.48% 0.15 123.33',
    600: '60.35% 0.14 123.33',
    700: '51.56% 0.12 123.33',
    800: '40.43% 0.09 123.33',
    900: '29.69% 0.07 123.33',
    950: '18.75% 0.04 123.33'
  },
  emerald: {
    50: '98.83% 0.005 140',
    100: '96.29% 0.02 140',
    200: '91.41% 0.04 140',
    300: '84.57% 0.08 140',
    400: '77.73% 0.11 140',
    500: '71.09% 0.15 140',
    600: '59.77% 0.14 140',
    700: '51.17% 0.12 140',
    800: '40.04% 0.09 140',
    900: '29.49% 0.07 140',
    950: '18.75% 0.04 140'
  },
  teal: {
    50: '98.83% 0.005 160',
    100: '96.29% 0.02 160',
    200: '91.21% 0.04 160',
    300: '84.38% 0.08 160',
    400: '77.54% 0.11 160',
    500: '70.51% 0.15 160',
    600: '59.38% 0.14 160',
    700: '50.78% 0.12 160',
    800: '39.84% 0.09 160',
    900: '29.1% 0.07 160',
    950: '18.36% 0.04 160'
  },
  cyan: {
    50: '98.83% 0.005 180',
    100: '96.29% 0.02 180',
    200: '91.21% 0.04 180',
    300: '84.38% 0.08 180',
    400: '77.34% 0.11 180',
    500: '70.51% 0.15 180',
    600: '59.18% 0.14 180',
    700: '50.59% 0.12 180',
    800: '39.65% 0.09 180',
    900: '28.91% 0.07 180',
    950: '18.16% 0.04 180'
  },
  sky: {
    50: '98.83% 0.005 210',
    100: '96.29% 0.02 210',
    200: '91.41% 0.04 210',
    300: '84.57% 0.08 210',
    400: '77.73% 0.11 210',
    500: '70.9% 0.15 210',
    600: '59.57% 0.14 210',
    700: '50.78% 0.12 210',
    800: '39.84% 0.09 210',
    900: '29.1% 0.07 210',
    950: '18.16% 0.04 210'
  },
  blue: {
    50: '98.83% 0.005 240',
    100: '96.48% 0.02 240',
    200: '91.6% 0.04 240',
    300: '84.96% 0.08 240',
    400: '78.32% 0.11 240',
    500: '71.88% 0.15 240',
    600: '60.55% 0.14 240',
    700: '51.76% 0.12 240',
    800: '40.63% 0.09 240',
    900: '29.69% 0.07 240',
    950: '18.75% 0.04 240'
  },
  indigo: {
    50: '98.83% 0.005 260',
    100: '96.48% 0.02 260',
    200: '91.8% 0.04 260',
    300: '85.35% 0.08 260',
    400: '78.91% 0.11 260',
    500: '72.66% 0.15 260',
    600: '61.33% 0.14 260',
    700: '52.34% 0.12 260',
    800: '41.21% 0.09 260',
    900: '30.08% 0.07 260',
    950: '19.14% 0.04 260'
  },
  violet: {
    50: '98.83% 0.005 280',
    100: '96.48% 0.02 280',
    200: '91.99% 0.04 280',
    300: '85.74% 0.08 280',
    400: '79.49% 0.11 280',
    500: '73.44% 0.15 280',
    600: '61.91% 0.14 280',
    700: '52.93% 0.12 280',
    800: '41.6% 0.09 280',
    900: '30.47% 0.07 280',
    950: '19.34% 0.04 280'
  },
  purple: {
    50: '98.83% 0.005 300',
    100: '96.68% 0.02 300',
    200: '92.19% 0.04 300',
    300: '85.94% 0.08 300',
    400: '79.88% 0.11 300',
    500: '73.83% 0.15 300',
    600: '62.5% 0.14 300',
    700: '53.32% 0.12 300',
    800: '41.8% 0.09 300',
    900: '30.66% 0.07 300',
    950: '19.53% 0.04 300'
  },
  fuchsia: {
    50: '98.83% 0.005 320',
    100: '96.68% 0.02 320',
    200: '92.19% 0.04 320',
    300: '86.13% 0.08 320',
    400: '80.08% 0.11 320',
    500: '74.22% 0.15 320',
    600: '62.7% 0.14 320',
    700: '53.52% 0.12 320',
    800: '41.99% 0.09 320',
    900: '30.86% 0.07 320',
    950: '19.53% 0.04 320'
  },
  pink: {
    50: '98.83% 0.005 340',
    100: '96.68% 0.02 340',
    200: '92.38% 0.04 340',
    300: '86.33% 0.08 340',
    400: '80.27% 0.11 340',
    500: '74.41% 0.15 340',
    600: '62.89% 0.14 340',
    700: '53.71% 0.12 340',
    800: '41.99% 0.09 340',
    900: '30.86% 0.07 340',
    950: '19.53% 0.04 340'
  },
  rose: {
    50: '98.83% 0.005 0',
    100: '96.68% 0.02 0',
    200: '92.38% 0.04 0',
    300: '86.33% 0.08 0',
    400: '80.27% 0.11 0',
    500: '74.41% 0.15 0',
    600: '62.7% 0.14 0',
    700: '53.52% 0.12 0',
    800: '41.99% 0.09 0',
    900: '30.66% 0.07 0',
    950: '19.34% 0.04 0'
  },
  slate: {
    50: '98.83% 0.005 275',
    100: '96.48% 0.02 275',
    200: '91.8% 0.02 275',
    300: '85.35% 0.02 275',
    400: '78.91% 0.02 275',
    500: '72.66% 0.02 275',
    600: '61.33% 0.02 275',
    700: '52.34% 0.02 275',
    800: '41.21% 0.02 275',
    900: '30.27% 0.02 275',
    950: '19.34% 0.02 275'
  },
  gray: {
    50: '98.83% 0.005 275',
    100: '96.48% 0.02 275',
    200: '91.8% 0.02 275',
    300: '85.35% 0.02 275',
    400: '78.91% 0.02 275',
    500: '72.66% 0.02 275',
    600: '61.33% 0.02 275',
    700: '52.34% 0.02 275',
    800: '41.21% 0.02 275',
    900: '30.27% 0.02 275',
    950: '19.34% 0.02 275'
  },
  zinc: {
    50: '98.83% 0.005 275',
    100: '96.48% 0.01 275',
    200: '91.8% 0.01 275',
    300: '85.35% 0.01 275',
    400: '78.91% 0.01 275',
    500: '72.66% 0.01 275',
    600: '61.33% 0.01 275',
    700: '52.34% 0.01 275',
    800: '41.21% 0.01 275',
    900: '30.27% 0.01 275',
    950: '19.34% 0.01 275'
  },
  neutral: {
    50: '98.83% 0.005 0',
    100: '96.48% 0 0',
    200: '91.8% 0 0',
    300: '85.35% 0 0',
    400: '78.91% 0 0',
    500: '72.66% 0 0',
    600: '61.13% 0 0',
    700: '52.34% 0 0',
    800: '41.21% 0 0',
    900: '30.08% 0 0',
    950: '19.34% 0 0'
  },
  stone: {
    50: '98.83% 0.008 75',
    100: '96.48% 0.01 75',
    200: '91.8% 0.01 75',
    300: '85.35% 0.01 75',
    400: '78.91% 0.01 75',
    500: '72.66% 0.01 75',
    600: '61.33% 0.01 75',
    700: '52.34% 0.01 75',
    800: '41.21% 0.01 75',
    900: '30.27% 0.01 75',
    950: '19.34% 0.01 75'
  },
  sand: {
    50: '98.83% 0.008 75',
    100: '96.48% 0.01 75',
    200: '91.8% 0.01 75',
    300: '85.35% 0.01 75',
    400: '78.91% 0.01 75',
    500: '72.66% 0.01 75',
    600: '61.33% 0.01 75',
    700: '52.34% 0.01 75',
    800: '41.21% 0.01 75',
    900: '30.27% 0.01 75',
    950: '19.34% 0.01 75'
  },
  olive: {
    50: '98.83% 0.008 120',
    100: '96.48% 0.01 120',
    200: '91.8% 0.01 120',
    300: '85.16% 0.01 120',
    400: '78.91% 0.01 120',
    500: '72.46% 0.01 120',
    600: '61.13% 0.01 120',
    700: '52.34% 0.01 120',
    800: '41.02% 0.01 120',
    900: '30.08% 0.01 120',
    950: '19.14% 0.01 120'
  },
  mauve: {
    50: '98.83% 0.008 325',
    100: '96.68% 0.01 325',
    200: '91.8% 0.01 325',
    300: '85.35% 0.01 325',
    400: '78.91% 0.01 325',
    500: '72.66% 0.01 325',
    600: '61.33% 0.01 325',
    700: '52.34% 0.01 325',
    800: '41.21% 0.01 325',
    900: '30.27% 0.01 325',
    950: '19.34% 0.01 325'
  }
}

let colors: Record<string, string | Record<number, string>> = {}

Object.keys(rawColors).forEach((color) => {
  Object.entries(rawColors[color]).forEach(([shade, value]) => {
    ;(colors[color] ??= {})[shade] = isNode
      ? `oklch(${value} / <alpha-value>)`
      : formatRgb(`oklch(${value})`)
          ?.replace('rgb', 'rgba')
          .replace(')', ', <alpha-value>)')
  })
})

colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  ...colors
}

export { colors }
