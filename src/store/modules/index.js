const requireModule = require.context('.', true, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return

  // Replace ./ and .js
  const path = fileName.replace(/(\.\/|\.js)/g, '')
  const [moduleName, imported] = path.split('/')
  if (!modules[moduleName]) {
    modules[moduleName] = {}
  }

  if (imported == undefined) {
    modules[moduleName] = requireModule(fileName).default
  } else {
    modules[moduleName][imported] = requireModule(fileName).default
    modules[moduleName]['namespaced'] = true
  }
})

export default modules
