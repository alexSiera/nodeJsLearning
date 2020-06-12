const EventEmmiter = require('events');
class Logger extends EventEmmiter {
    log (message) {
        this.emit('message2', `${message} ${Date.now()}`);
    }
}

const logger = new Logger();
logger.on('message2', data => {
    console.log(data, 'All bee allright')
})

logger.log("hello");
logger.log("hello");
logger.log("hello");