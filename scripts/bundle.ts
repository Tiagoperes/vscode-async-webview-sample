import { copyFile } from 'fs/promises'

async function start() {
  try {
    await copyFile('./packages/extension/package.json', './out/package.json')
    await copyFile('./LICENSE', './out/LICENSE.md')
    await copyFile('./README.md', './out/README.md')
    await copyFile('./CHANGELOG.md', './out/CHANGELOG.md')
    process.exit(0)
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error(e.message ?? 'Unknown error')
    process.exit(1)
  }
}

start()
