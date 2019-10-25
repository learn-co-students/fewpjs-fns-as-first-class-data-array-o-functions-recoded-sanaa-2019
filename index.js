function wakeDog(dogName, dogBreed) {
   let res = `Wake ${dogName} the ${dogBreed}`;
   console.log(`Wake ${dogName} the ${dogBreed}`);
   return res;
  }

  function leashDog(dogName, dogBreed) {
    let res = `Leash ${dogName} the ${dogBreed}`;
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return res;
  }

  function walkToPark(dogName, dogBreed) {
    let res = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return res;
  }

  function throwFrisbee(dogName, dogBreed) {
    let res = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return res;
  }

  function walkHome(dogName, dogBreed) {
    let res = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return res;
  }

  function unleashDog(dogName, dogBreed) {
    let res = `Unleash ${dogName} the ${dogBreed}`;
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return res;
  }
  let routine=[wakeDog, leashDog, walkToPark , throwFrisbee, walkHome,unleashDog];
  function exerciseDog(Name, Breed)
  {
      const arrayCopy=[];
      for(let i=0; i < routine.length; i++)
      {
            arrayCopy.push(routine[i](Name, Breed));
            routine[i](Name, Breed);
      }
      console.log(arrayCopy);
      return arrayCopy;
  }
  
  console.log(routine);
  exerciseDog("Xerox","Collie");
