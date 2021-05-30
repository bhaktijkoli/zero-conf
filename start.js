var bonjour = require('bonjour')()
const name = process.argv[2];
const connectAppId = process.argv[3];
// advertise an HTTP server on port 3000
bonjour.publish({ name, type: 'http', port: 3000, txt: { connectAppId, userId: '45123' } })
console.log(`Registered '${name}' on local network`)
// browse for all http services
bonjour.find({ type: 'http' }, function (service) {
    console.log('Found an Device:', service.name, service.referer.address, service.txt)
})