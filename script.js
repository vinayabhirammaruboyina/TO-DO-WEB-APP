
document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskText = taskInput.value;
    const taskDateTime = taskDate.value;

    if (taskText === '' || taskDateTime === '') {
        alert('Please enter a task and date/time');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = `${taskText} (Due: ${taskDateTime})`;
    li.appendChild(taskSpan);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', function() {
        const newTaskText = prompt('Edit task', taskSpan.textContent.split(' (Due: ')[0]);
        const newTaskDate = prompt('Edit date/time', taskDateTime);
        if (newTaskText && newTaskDate) {
            taskSpan.textContent = `${newTaskText} (Due: ${newTaskDate})`;
        }
    });
    li.appendChild(editButton);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
    taskDate.value = '';
}
