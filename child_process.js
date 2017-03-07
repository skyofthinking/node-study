var exec = require('child_process').exec;
var cmdStr = 'java -version';
exec(cmdStr, function (err, stdout, stderr) {
    if (err) {
        console.log('get weather api error:' + stderr);
    } else {
        // console.log(err);
        // console.log(stdout);
        console.log(stderr);
    }
});