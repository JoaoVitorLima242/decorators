import http from 'http'

function handlerRequest(req, res) {
  res.end('Hello world!')
}

const server = http.createServer(handlerRequest)
const port = 3000
server.listen(port, console.log('Server running at', port))

// curl -1 localhost:3000
