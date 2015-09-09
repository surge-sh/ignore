var path = require('path')
var ignore = require('fstream-ignore')

describe('surge-ignore', function () {
  it('Should be cool.', function (done) {
    done()
  })
  it('Should ignore ~ files.', function () {
    ignore({
      path: path.resolve('./fixtures'),
      ignoreFiles: ['.surgeignore']
    })
  })
})
