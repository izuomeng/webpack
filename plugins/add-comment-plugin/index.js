// 生成fileist.md插件，包含了编译生成的所有文件
class Plugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {
    compiler.plugin('emit', function(compilation, callback) {
      let filelist = 'In this build: \n\n'
      for (let filename in compilation.assets) {
        filelist += `- ${filename}\n`
      }
      compilation.assets['filelist.md'] = {
        source() {
          return filelist
        },
        size() {
          return filelist.length
        }
      }
      callback()
    })
  }
}

module.exports = Plugin