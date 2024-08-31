const btn = document.querySelector(".btn-cadastro")
const input = document.querySelector(".input-cadastro")
const ul = document.querySelector(".task-list")

const KEY = "@vieira.key"

const array = [{description: "Vieira", isComplete: true}]


document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem(KEY, JSON.stringify(array))

    const item = localStorage.getItem(KEY)

    if(item){
        itemconsumido = JSON.parse(item)
        console.log(itemconsumido)
    }
})


btn.addEventListener("click", (event) => {
    event.preventDefault();

    if(!input.value){
        return alert("Por favor, insira uma tarefa.")
    }

    const checkbox = `<input type="checkbox" />`

    const li = `<li class="task-item"> ${checkbox}  <p>${input.value}</p>  </li>`


    ul.innerHTML += li

})