function wakeDog(dogName,dogBreed){
  return console.log(`Wake ${dogName} the ${dogBreed}`);

}
function leashDog(dogName, dogBreed) {
  
return console.log(`Leash  ${dogName} the ${dogBreed}`);

}
function walkToPark(dogName, dogBreed) {
  
console.log(`Walk to the park with  ${dogName} the ${dogBreed}`);

}
function throwFrisbee(dogName, dogBreed){
 console.log(`Throw the frisbee for  ${dogName} the${dogBreed}`);

}
function walkHome(dogName, dogBreed) {
return console.log(`Walk home with ${dogName} the${dogBreed}`);

}
function unleashDog(dogName, dogBreed){
return console.log(`Unleash  ${dogName} the ${dogBreed}`);


}
let routine=[function wakeDog(dogName, dogBreed) {
 
  console.log(`Wake ${dogName} the ${dogBreed}`);
},leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName, dogBreed){

 for(let i=0;i<routine.length-1;i++){
   routine[i](dogName,dogBreed)
 }



}