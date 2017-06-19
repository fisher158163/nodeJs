
var EventEmitters = require('events').EventEmitter
var life = new EventEmitters()

//设置最大监听器个数
life.setMaxListeners(15)

life.on('求安慰',function(who){
console.log('给'+ who + '倒水')
})

life.on('求安慰',function(who){
console.log('给'+ who + '洗脚')
})

life.on('求安慰',function(who){
console.log('给'+ who + '搓背')
})

life.emit('求安慰','汉子')