
const Todo =JSON.parse(localStorage.getItem('data')) || []
console.log(Todo);

// Initial display of stored todos
displayTodo();
let x=document.querySelector('.Add-button')
x.addEventListener('click',()=>
{
  add();
})


// Function to add a todo item
function add() { 
  let nameInput = document.querySelector('.todo-input');
  let dateInput = document.querySelector('.todo-input-date');
  
  if (nameInput.value && dateInput.value) {
    Todo.push({ name: nameInput.value, date: dateInput.value });
    console.log(Todo);
    nameInput.value = '';
    dateInput.value = '';
    localStorage.setItem('data', JSON.stringify(Todo));
    displayTodo();
  }
}

// Function to display all todo items
function displayTodo() {
  let todoHTML = '';
  Todo.forEach((todoObject,i) =>
{
    // const todoObject = Todo[i];
      todoHTML += `
        <div>${todoObject.name}</div>
        <div>${todoObject.date}</div>
        <button class="delete" onclick="deleteTodoItem(${i})" >Delete</button>
      `;
});
  // for (let i = 0; i < Todo.length; i++) {
  //   const todoObject = Todo[i];
  //   todoHTML += `
  //     <div>${todoObject.name}</div>
  //     <div>${todoObject.date}</div>
  //     <button class="delete" onclick="deleteTodoItem(${i})">Delete</button>
  //   `;
  // }
  document.querySelector('.display').innerHTML = todoHTML;
}

// Function to delete a todo item
function deleteTodoItem(index) {
  Todo.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(Todo));
  displayTodo();
}

// Function to add a todo item when pressing Enter key
function add1(event) {
  if (event.key === 'Enter') {
    add();
  }
}

// document.querySelector('.todo-input').addEventListener('keydown', add1);
