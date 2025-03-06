const input = document.querySelector('#mainInput');
const add = document.querySelector('#add');
const change = document.querySelector('#change');
const list = document.querySelector('#list');
const btns = document.querySelectorAll('button');

const colors = document.querySelectorAll('.btn')

colors.forEach(button => {
  button.addEventListener('click', () => {
    colors.forEach(btn => btn.classList.remove('btn-primary'))
    colors.forEach(btn => btn.classList.add('btn-outline-secondary')); 
    button.classList.add('btn-primary'); 
    button.classList.remove('btn-outline-secondary'); 
  });
});

let data = [];

showData();

add.onclick = (e) => {
  e.preventDefault();

  if (input.value.trim().length > 0) {
    const todoData = {
      id: Math.random() * 100,
      text: input.value,
      done: false,
      important: false
    };
    data.push(todoData);
    showData()
    input.value = '';
    input.style.border = '1px solid black';
  } else {
    input.style.border = '1px solid red';
  }
};

function showData(filteredData = data) {
  list.innerHTML = "<li class='list-group-item' id='noTodo'>No to-do</li>";

  if (filteredData.length === 0) return;

  const noTodoElement = document.getElementById('noTodo');
  if (noTodoElement) {
    noTodoElement.remove();
  }

  for (const todo of filteredData) {
    let clazz = todo.done ? 'text-decoration-line-through' : '';
    let importantClass = todo.important ? 'text-danger fw-bold' : '';

    list.innerHTML += `
      <li class='list-group-item d-flex align-items-center gap-1'>
        <span class='flex-grow-1 ${clazz} ${importantClass}' onclick='doneTodo(${todo.id})'>
          ${todo.text}
        </span>

        <button onclick='delTodo(${todo.id}, event)' class='btn btn-outline-danger'>
          <i class="bi bi-trash"></i>
        </button>

        <button class="btn btn-outline-primary" onclick='editTodo(${todo.id},event)'>
          <i class="bi bi-pen"></i>
        </button>

        <button class='btn btn-outline-warning' onclick='markImportant(${todo.id})'>
          <i class="bi bi-exclamation-diamond"></i>
        </button>
      </li>
    `;
  }
}

function delTodo(id, e) {
  e.preventDefault();
  data = data.filter(todo => todo.id !== id);
  showData();
}

function doneTodo(id) {
  const element = data.find(el => el.id === id);
  let updElement = { ...element, done: !element.done };
  let index = data.findIndex(el => el.id === id);
  data[index] = updElement;
  showData();
}

function markImportant(id) {
  const index = data.findIndex(el => el.id === id);
  if (index !== -1) {
    data[index].important = !data[index].important;
    showData();
  }
}

btns[0].onclick = () => {
  showData();
};

btns[1].onclick = () => {
  let doneTodos = data.filter(todo => todo.done);
  console.log(doneTodos);
  showData(doneTodos);
};

btns[2].onclick = () => {
  let activeTodos = data.filter(todo => !todo.done);
  showData(activeTodos);
};

function editTodo(id, e) {
  e.preventDefault();

  const updDate = data.find(el => el.id === id);
  input.value = updDate.text;

  add.style.display = 'none';
  change.style.display = 'block';

  change.onclick = (ev) => {
    ev.preventDefault();
    
    if (input.value.trim().length === 0) {
      input.style.border = '1px solid red';
      return;
    } else {
      input.style.border = '1px solid black';
    }

    const newTodo = { ...updDate, text: input.value };
    let index = data.findIndex(el => el.id === id);

    data[index] = newTodo;

    showData();
    input.value = '';

    add.style.display = 'block';
    change.style.display = 'none';
  };
}


change.style.display = 'none';