const table = document.querySelector('table')
console.log(table)


const createRow = (user) => {
    let newRow = document.createElement('tr')
    let element = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>`
    newRow.innerHTML = element
    return newRow
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
  console.log(data)
  data.forEach(user=> {
    table.appendChild(createRow(user))
  })
})

