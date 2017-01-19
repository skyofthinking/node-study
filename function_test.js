function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello1");

function execute_anonymous(someFunction, value) {
    someFunction(value);
}

execute_anonymous(function (word) { console.log(word) }, "Hello2");