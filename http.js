
var http = require('http')

http
.createServer(function(req,res){

res.writeHead(200,{'Content-Type':'Text/Plain'})
res.write('hello Node.js,这是我第一个node.js,😂😀👍')
res.end()

})
.listen(2016)

