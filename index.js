const app kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name){
  var myArray=[...kittens,name]
  return myArray
}
