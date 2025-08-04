let input = document.querySelector('input')
let form = document.querySelector('form')
let ul = document.querySelector('ul')

const saveTodo = (e) =>{
    e.preventDefault()
    let li = document.createElement('li')
    li.innerText = input.value
    li.className = "list-group-item rounded-0"
    let  delbtn = document.createElement('button')
    delbtn.innerText = "Delete"
    delbtn.className = 'btn btn-sm btn-danger rounded-0 float-end'
    li.appendChild(delbtn)
    ul.appendChild(li)
    form.reset()
}
form.addEventListener("submit",saveTodo)

const deleteTodo = (e) => {
    if(e.target.className.includes('btn-danger')){
        ul.removeChild(e.target.parentElement)
    }
}
ul.addEventListener("click",deleteTodo)