/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const util = require('util')
const fsOpen = util.promisify(fs.open)
const fsClose = util.promisify(fs.close)
const { config } = require('./config.const')

const writeFile = async (filePath, value = '', isNull = false) => {
  const fileDescriptor = isNull ? await fsOpen(filePath, 'w') : await fsOpen(filePath)
  if (value) await fs.promises.appendFile(filePath, value + '\n')
  await fsClose(fileDescriptor)
}

const clearConfig = async () => {
  for (const key in config) {
    const path = `keys.${key}.json`
    await writeFile(path, '', true)
  }
}

const generateData = async (obj = {}, path) => {
  for (const key in config) {
    const data = config[key]
    const path = `keys.${key}.json`
    await writeFile(path, JSON.stringify(data, null, 2), true)
  }
}

const prebuildGenerateEnv = async () => {
  await clearConfig()
  await generateData()
}

prebuildGenerateEnv()
