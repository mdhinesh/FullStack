var heading = document.getElementById('heading')
var body = document.querySelector('body')

heading.innerHTML = "I was adde by js"
heading.style = "color:red; font-size:2rem"

heading.classList.add('five')
heading.classList.remove('one')

console.log(heading.classList)

body.classList.add('dark')
body.classList.remove('dark')
