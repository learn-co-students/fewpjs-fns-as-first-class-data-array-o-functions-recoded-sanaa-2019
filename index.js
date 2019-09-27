function wakeDog(dogName, dogBreed) {
    let output = 'Wake ' + dogName +' the ' +dogBreed ; 
    console.log(output);
    return output;
}
function leashDog(dogName , dogBreed) {
    let output = 'Leash ' + dogName +' the ' +dogBreed ; 
    console.log(output);
    return output;
}
function walkToPark(dogName , dogBreed) {
    let output = 'Walk to the park with ' + dogName +' the ' +dogBreed; 
    console.log(output);
    return output;
}
function throwFrisbee(dogName , dogBreed) {
    let output = 'Throw the frisbee for ' + dogName +' the ' +dogBreed ; 
    console.log(output);
    return output;
}
function walkHome(dogName , dogBreed) {
    let output = 'Walk home with ' + dogName +' the ' +dogBreed ; 
    console.log(output);
    return output;
}
function unleashDog(dogName , dogBreed) {
    let output = 'Unleash ' + dogName +' the ' +dogBreed ; 
    console.log(output);
    return output;
}
const routine = [ wakeDog,leashDog ,walkToPark , throwFrisbee, walkHome ,unleashDog ];

function exerciseDog(dogName,dogBreed) {
    let element = [];
    for (let index = 0; index < routine.length; index++) {
         element.push (routine[index](dogName , dogBreed));
    }
    return element;
}