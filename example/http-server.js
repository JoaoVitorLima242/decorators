import http from 'http'
import { InjectHttpInterceptor } from '../src/agent'

InjectHttpInterceptor()
// We need to pass the setHeader to all our routes
// So we will create an interceptor to avoid duplicate code
function handlerRequest(req, res) {
  res.end('Hello world!')
}

const server = http.createServer(handlerRequest)
const port = 3000
server.listen(port, console.log('Server running at', port))

// curl -i localhost:3000
