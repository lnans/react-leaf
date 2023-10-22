// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const outRootDir = 'dist'

function main() {
  // prepare package.json, remove scripts and devDependencies
  const source = fs.readFileSync(process.cwd() + '/package.json').toString('utf-8')
  const sourceObj = JSON.parse(source)
  sourceObj.scripts = undefined
  sourceObj.devDependencies = undefined
  fs.writeFileSync(
    process.cwd() + `/${outRootDir}/package.json`,
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
  )

  // copy README.md
  fs.copyFileSync(process.cwd() + '/README.md', process.cwd() + `/${outRootDir}/README.md`)

  // copy .npmignore
  fs.copyFileSync(process.cwd() + '/.npmignore', process.cwd() + `/${outRootDir}/.npmignore`)
}

main()
