class App {
  constructor() {
    this.tasks = [];
    this.taskInput = document.getElementById('task-input');
    this.taskList = document.getElementById('task-list');
  }

  addTask() {
    const task = this.taskInput.value;
    this.tasks.push(task);
    this.renderTaskList();
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.renderTaskList();
  }

  renderTaskList() {
    const taskListHTML = this.tasks.map((task, index) => {
      return `
        <li>
          <span>${task}</span>
          <button class="remove-task" data-index="${index}">Remove</button>
        </li>
      `;
    }).join('');
    this.taskList.innerHTML = taskListHTML;
  }
}

const app = new App();

document.getElementById('add-task').addEventListener('click', () => {
  app.addTask();
});

document.getElementById('task-list').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-task')) {
    const index = event.target.dataset.index;
    app.removeTask(index);
  }
});



// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
