const School = require('./school');

const school = new School();
school.on('bellRing', ({period,number}) =>{
    console.log(`We need to run coz ${period} and ${number}`);
})
school.startPeriod();



