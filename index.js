
const a= `Xerox`
const b= `Border Collie`;


function wakeDog(dogName, dogBreed) {
    
    return(`Wake ${dogName} the ${dogBreed}`);
  }

function leashDog(dogName, dogBreed) {
    
    return(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
    return(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
    return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
    return(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
    return(`Unleash ${dogName} the ${dogBreed}`);
}



let routine=[ wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];
console.log(routine);
function exerciseDog(dogName, dogBreed) {

    let successMessages = []
    for (let i = 0; i < routine.length; i++) {
        successMessages.push(routine[i](dogName, dogBreed));
    }
    console.log(successMessages);
    return successMessages;
}

exerciseDog(a,b);