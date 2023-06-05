const Emitter = require("events");
let emitter = new Emitter();
let eventName = "Timer";
emitter.on(eventName, count => {
    let i = +count;
    let timer = setInterval(() => {
        i++;
        console.log(i);
        if (i === 0) {
            clearInterval(timer);
        }
    }, 1000);
});

function myTimer(count) {
    emitter.on(eventName, count);
}

module.exports = myTimer;