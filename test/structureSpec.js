const expect = require('chai').expect

describe('base structure is valid', () => {
  it('has /src/index.js', () => {
    const index = require('./../src/index.js')
    expect(index).to.not.be.null
  })
})