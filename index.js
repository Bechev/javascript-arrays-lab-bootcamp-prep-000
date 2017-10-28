const kittens = ["Milo","Otis","Garfield"]
const name = "Ralph"
function destructivelyAppendKitten(name){
  myArray=[...kittens,name]
  return myArray
}
