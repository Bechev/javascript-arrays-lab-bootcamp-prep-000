const kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name)){
  name="Ralph"
  var myArray=[...kittens,name]
  return myArray
}
