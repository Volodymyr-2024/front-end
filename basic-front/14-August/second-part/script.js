let uniqueIdCounter = 0;

const fetchTodos = async () => {
  try {
    const res = await fetch("https://dummyjson.com/todos");
    if (!res.ok) {
      throw new Error("Request was not received");
    }
    const todos = await res.json();
    return todos.todos;
  } catch (e) {
    console.log(e);
    return [];
  }
};
const renderTodos = async () => {
  const todos = await fetchTodos();
  const container = document.getElementById("container");
  todos.map((todo, index) => {
    const element = createTodoElement(todo);
    container.append(element);
  });
};
const createTodoElement = (todo) => {
  const element = document.createElement("div");
  element.className = "todo";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = Boolean(todo.completed);
  const uniqueId = `todo_${uniqueIdCounter++}`;
  checkbox.id = uniqueId;
  //   checkbox.name = `checkbox_${todo.id}`;
  //   checkbox.id = `checkbox_${todo.id}`;
  checkbox.addEventListener("change", (e) => {
    const label = document.getElementById(`label_${todo.id}`);
    label.classList.toggle("todo_label-done");
  });
  const label = document.createElement("label");
  label.id = `label_${uniqueId}`;
  label.htmlFor = checkbox.id;
  label.innerHTML = todo.todo;
  if (checkbox.checked) {
    label.classList.add("todo_label-done");
  }
  element.append(checkbox, label);
  return element;
};
const renderSingleTodo = (todo) => {
  const container = document.getElementById("container");
  const element = createTodoElement(todo);
  container.append(element);
};
document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  await writeNewTodo(e.target.elements.input.value);
  e.target.reset();
});

const writeNewTodo = async (todo) => {
  try {
    const res = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo,
        completed: false,
        userId: 5,
      }),
    });
    const createTodo = await res.json();
    renderSingleTodo(createTodo);
  } catch (e) {
    return e;
  }
};
