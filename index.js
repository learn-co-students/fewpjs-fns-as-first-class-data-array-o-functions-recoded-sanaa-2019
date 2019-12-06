function wakeDog(dogName, dogBreed) {
    let dog = `Wake ${dogName} the ${dogBreed}`;
    console.log(dog);
    return dog
  }
function leashDog(dogName, dogBreed) {
    let dog = `Leash ${dogName} the ${dogBreed}`;
    console.log(dog);
    return dog;
  }
function walkToPark(dogName, dogBreed) {
    let dog = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(dog);
    return dog;
  }
function throwFrisbee(dogName, dogBreed) {
    let dog = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(dog);
    return dog;
  }
function walkHome(dogName, dogBreed) {
    let dog = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(dog);
    return dog;
  }
function unleashDog(dogName, dogBreed) {
    let dog = `Unleash ${dogName} the ${dogBreed}`
    console.log(dog);
    return dog;
  }

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName, dogBreed){
    const dogArray = [];
    for(let i = 0; i < routine.length; i++){
        dogArray.push(routine[i](dogName,dogBreed));
    }
    return dogArray;
}
exerciseDog('hatchi','recket');