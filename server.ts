import http = require('http')
import url = require('url')

const port = process.env.port || 1337

module.exports = function start () {
    http.createServer(function (req, res) {
        let req_url = url.parse(req.url)
        let path = {
            "pathname": req_url.pathname,
            "query": req_url.query
        }

        console.log(path)

        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write("Hello!")
        res.end()
    }).listen(port)
}
