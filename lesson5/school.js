const EventEmitter = require('events');

class School extends EventEmitter{
    startPeriod(){
        console.log('Class started');
    
        this.emit('bellRing', {
            period: 'Second Period',
            number : '2nd'
        });
    
    }
}


module.exports = School;