function wakeDog(dogName,dogBreed){
  let u=`Wake ${dogName} the ${dogBreed}`;
  return u;

}
function leashDog(dogName, dogBreed) {
  
let u=`Leash ${dogName} the ${dogBreed}`;
 return u;
}
function walkToPark(dogName, dogBreed) {
  
let u=`Walk to the park with ${dogName} the ${dogBreed}`;
return u;
}
function throwFrisbee(dogName, dogBreed){
 let u=`Throw the frisbee for ${dogName} the ${dogBreed}`;
 return u;

}
function walkHome(dogName, dogBreed) {
let u=`Walk home with ${dogName} the ${dogBreed}`;
return u;
}
function unleashDog(dogName, dogBreed){
 let u=`Unleash ${dogName} the ${dogBreed}`;
 return u;


}

let routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog] ;

function exerciseDog(dogName, dogBreed){
  let res[];
  for(let i=0;i<routine.length-1;i++){
   res.push(routine[i](dogName,dogBreed));
  }
  return res;
}
 
  //console.log(`Wake ${dogName} the ${dogBreed}`);
//},leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

//function exerciseDog(dogName, dogBreed){

 //for(let i=0;i<routine.length-1;i++){
   //routine[i](dogName,dogBreed)
 //}



//}