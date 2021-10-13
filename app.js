// function greet(name,age){
//   var n=name+age
//   return n
// }

// console.log(greet("DhineshM", 19))

// var greet = function(name='',age=0){
//   var n=name + age
//   return n
// }
// console.log(greet('dhinesh',19))

// function add(a,b)
// {
//  var sum = a + b 
//  return sum
// }

var add = (a=0,b=0) =>{
  var sum = a+b
  return sum
}

console.log(add(10,20))
