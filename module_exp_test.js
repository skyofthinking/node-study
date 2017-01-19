var hello = require('./hello');
hello.world();

var Hello_Module = require('./module_exports');
hello_mod = new Hello_Module();
hello_mod.setName('BYVoid');
hello_mod.sayHello(); 