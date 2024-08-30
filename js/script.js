console.log("Application is running");


const btn = document.querySelector(".btn-cadastro")
const input = document.querySelector(".input-cadastro")
const ul = document.querySelector(".task-list")


btn.addEventListener("click", (event) => {
    event.preventDefault();

    if(!input.value){
        return alert("Por favor, insira uma tarefa.")
    }

    const checkbox = `<input type="checkbox" />`

    const li = `<li class="task-item"> ${checkbox}  <p>${input.value}</p>  </li>`


    ul.innerHTML += li

})