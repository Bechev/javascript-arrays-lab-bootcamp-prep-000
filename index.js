const kittens = ["Milo","Otis","Garfield"]
const name = "Ralph"
function destructivelyAppendKitten(name)){
  var myArray=[...kittens,name]
  return myArray
}
