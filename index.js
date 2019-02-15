// Write your solution here!
<<<<<<< HEAD
const drivers = ["Milo", "Otis", "Garfield"];


function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  return new_drivers = [...drivers, name];
}
function prependDriver(name) {
  return new_drivers = [name, ...drivers];
}

function removeLastDriver(){
  return drivers.slice(0,-1)
}
function removeFirstDriver(){
  return drivers.slice(1)
}
=======

const drivers = ["Milo", "Otis", "Garfield"];

let destructivelyAppendDriver = (name) => {
  return drivers.push(name)
}

let destructivelyPrependDriver = (name) => {
  return drivers.unshift(name)
}
>>>>>>> c5537e13c0852a2e217565241ba58ebdece51fc5
