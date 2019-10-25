let a;
function wakeDog(dogName, dogBreed) {
    a= `Wake ${dogName} the ${dogBreed}`

    console.log(a)
    return a
  }

  function leashDog(dogName, dogBreed) {
    
   a= `Leash ${dogName} the ${dogBreed}`
   console.log(a)

   return a

  }
  function walkToPark(dogName, dogBreed) {
      a=`Walk to the park with ${dogName} the ${dogBreed}`
      console.log(a)

      return a

  }
  function throwFrisbee(dogName, dogBreed) {
    
      a= `Throw the frisbee for ${dogName} the ${dogBreed}`
      console.log(a)

      return a

  }
  function walkHome(dogName, dogBreed) {
    
    a=`Walk home with ${dogName} the ${dogBreed}`
     console.log(a)

     return a

  }
  function unleashDog(dogName, dogBreed) {
    
      a=`Unleash ${dogName} the ${dogBreed}`
      console.log(a)

      return a

  }
const routine = [ wakeDog, leashDog ,walkToPark , throwFrisbee, walkHome , unleashDog ];

function exerciseDog(dogName,dogBreed) {
    let array = [];
    for (let i = 0; i < routine.length; i++) {
         array.push (routine[i](dogName , dogBreed));
    }
    return array;
}

