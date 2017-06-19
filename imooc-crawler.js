
var http = require('http')

//var url = 'http://www.imooc.com/learn/728'
var url = 'http://www.apple.com/cn/mac/'

http.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		console.log(html)
	})
}).on('error',function(){
	console.log('获取课程表出现错误！')
})