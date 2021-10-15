let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data =>{
  console.log(data)
}).then(data1 =>{
  console.log(data1)
})

// console.log(res)

  // const element = document.createElement('li')
  // const textNode = document.createTextNode(inputValue)
  // element.appendChild(textNode)
  // list.appendChild(element)
