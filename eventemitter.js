// event.js 文件
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function () {
    console.log('some_event 事件触发');
});
setTimeout(function () {
    event.emit('some_event');
}, 1000);

// event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('events', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('events', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('events', 'arg1 参数', 'arg2 参数'); 