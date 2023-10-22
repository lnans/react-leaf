/**
 * All colors are generated from the color tools at:
 * https://github.com/lnans/color-palette
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFileSync } = require('fs')
const { resolve, join } = require('path')

const stylesPath = join(resolve(__dirname, '..'), '/src/styles/_vars.scss')

const white = '#ffffff'
const black = '#111827'
const colors = [
  {
    name: 'blue',
    comment: 'generate with: #2d32c8, sat +0.29 ',
    shades: [
      '#000069',
      '#090d86',
      '#1b20a7',
      '#2d32c8',
      '#464bdd',
      '#696df2',
      '#8b8fff',
      '#b3b6ff',
      '#e2e3ff',
      '#f3f4ff',
      '#f9f9ff',
    ],
  },
  {
    name: 'orange',
    comment: 'generate with: #d75e1d, sat +0.42 ',
    shades: [
      '#6f1a00',
      '#8f3200',
      '#b3480f',
      '#d75e1d',
      '#eb7637',
      '#fd955e',
      '#ffb584',
      '#ffd0af',
      '#ffede0',
      '#fff8f3',
      '#fffbf9',
    ],
  },
  {
    name: 'red',
    comment: 'generate with: #d61f1f, sat +0.41 ',
    shades: [
      '#6f0000',
      '#8e0101',
      '#b21010',
      '#d61f1f',
      '#ea3939',
      '#fc5f5f',
      '#ff8585',
      '#ffafaf',
      '#ffe0e0',
      '#fff3f3',
      '#fff9f9',
    ],
  },
  {
    name: 'violet',
    comment: 'generate with: #5c3abb, sat +0.19 ',
    shades: [
      '#140065',
      '#2e107e',
      '#45259d',
      '#5c3abb',
      '#7351d2',
      '#9171ea',
      '#af91ff',
      '#cbb6ff',
      '#ebe3ff',
      '#f7f4ff',
      '#fbf9ff',
    ],
  },
  {
    name: 'gray',
    comment: 'generate with: #2c2c2c, sat +0.30 ',
    shades: [
      '#000000',
      '#090909',
      '#1a1a1a',
      '#2c2c2c',
      '#454545',
      '#686868',
      '#8b8b8b',
      '#b3b3b3',
      '#e2e2e2',
      '#f3f3f3',
      '#f9f9f9',
    ],
  },
  {
    name: 'green',
    comment: 'generate with: #42b349, sat +0.12 ',
    shades: [
      '#006101',
      '#15791c',
      '#2c9632',
      '#42b349',
      '#58ca60',
      '#77e47e',
      '#94fe9b',
      '#b9ffbd',
      '#e4ffe6',
      '#f4fff5',
      '#fafffa',
    ],
  },
]

let result = `\
/**
 * File generated automatically by <root>/scripts/make-colors.js
 * @module @react-leaf/core
 */

$white: ${white};
$black: ${black};
$colors: (
`

for (let i = 0; i < colors.length; i++) {
  result += `  '${colors[i].name}': (\n`
  for (let j = 0; j < colors[i].shades.length; j++) {
    const shade = `    '${j + 1}': ${colors[i].shades[j]},\n`
    result += shade
  }
  result += '  ),\n'
}
result += ');\n'

// write the result to a file in the root directory, overwriting the existing file if it exists
writeFileSync(stylesPath, result)

// console to the user that the file was created, with colors
console.log('\x1b[32m%s\x1b[0m', `-> [${stylesPath}] file updated!`)
