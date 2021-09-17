let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let age = 20;
if (age > 18 && early){
  raceNumber += 1000;
}
if (age > 18 && early){
  console.log(`Your race number is ${raceNumber} and your race time is 9:30 am.`);
} else if (age > 18 && !early){
  console.log(`Your race number is ${raceNumber} and your race time is 11:00 am`);
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber} and your race time is 12:30 pm`)
} else {
  console.log('Go to registration desk')
};
