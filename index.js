const kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
kittens.unshift(name)
return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var myArray = [...kitten,name]
  return myArray
}

function prependKitten(name){
  var myArray = [name,...kitten]
  return myArray
}
