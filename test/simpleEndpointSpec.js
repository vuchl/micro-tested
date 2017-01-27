// testing library
const expect = require('chai').expect

// get the url of a micro served microService
const listen = require('test-listen')

// http library
const request = require('request')
const micro = require('micro')

describe(`the endpoint facing the web`, async () => {
  // setup simple micro service
  const microService = require(process.cwd() + '/src/index.js')
  const server = micro(microService)
  
  // spin the service up and fetch the url (since the port is dynamic)
  const url =  await listen(server)

  describe('GET /', () => {
    it(`returns status code 200`, (done) => {
      request.get(url, (error, response, body) => {
        expect(response.statusCode).to.equal(200)
        done()            
      })
    })
    it(`returns "Now we talkin' micro!"`, (done) => {
      request.get(url, (error, response, body) => {
        expect(body).to.equal(`Now we talkin' micro!`)
        done()
      })
    })
  })
})
