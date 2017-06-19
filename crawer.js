
var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/728'

function filterChapters(html){
var $ = cheerio.load(html)
var chapters = $('.learnchapter')
}

http.get(url,function(res){
	var html = ''
	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		filterChapters(html)
		console.log(html)
	})
}).on('error',function(){

	console.log('获取课程表出现错误！')
})