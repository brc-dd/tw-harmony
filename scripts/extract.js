import { formatRgb } from 'culori'
import fs from 'fs'

// https://www.figma.com/community/plugin/1135653849910773588
import source from '../data/source.json' assert { type: 'json' }

const base = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff'
}

const oklch = { ...base }
const rgba = { ...base }

Object.values(source.children).forEach((value) => {
  Object.values(value.children).forEach((value) => {
    const [color, shade] = value.name.toLowerCase().split('/')
    ;(oklch[color] ??= {})[shade] = value.componentProperties[
      'Description#6:1'
    ].value.replace(')', '/<alpha-value>)')
    ;(rgba[color] ??= {})[shade] = formatRgb(
      value.componentProperties['Description#6:1'].value
    )
      .replace(')', ',<alpha-value>)')
      .replace('rgb', 'rgba')
      .replace(/ /g, '')
  })
})

// prettier-ignore
fs.writeFileSync(
  './src/colors.js',
  `export const oklch=JSON.parse('${JSON.stringify(oklch)}'),rgba=JSON.parse('${JSON.stringify(rgba)}');`
)
