const myBtn = document.querySelector('.btn')
const myInput = document.querySelector('.myInput')
const taskList = document.querySelector('.taskList')
const myArr=[]
myBtn.onclick = () => {
    const task = myInput.value

    if (task) {
      myArr.push(task);
      updatePage();
      myInput.value = "";
    } else {
      console.log("");
    }
  };

  function updatePage() {
   taskList.innerHTML = "";
   myArr.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = " delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => {
      myArr.splice(index, 1);
      updatePage();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

