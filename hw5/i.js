// const input = document.getElementById("input");
// const createButton = document.getElementById("crete_todo");
// const todoList = document.getElementById("todo_list");

// const createTodo = function () {
//   if (input.value.trim() === "") {
//     input.value = "";
//     return false;
//   } else {
//     const div = document.createElement("div");
//     const text = document.createElement("h3");

//     div.setAttribute("class", "block_text");
//     text.setAttribute("class", "text");

//     text.innerText = input.value.trim();
//     div.append(text);
//     todoList.append(div);

//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "delete";
//     div.appendChild(deleteBtn);
//     deleteBtn.addEventListener("click", (e) => {
//       todoList.removeChild(div);
//     });

//     const edit = document.createElement("button");
//     edit.innerText = "edit";
//     div.appendChild(edit);
//     edit.addEventListener("click", (e) => {
//       let user = prompt();
//       text.innerText = user;
//     });
//   }
//   input.value = "";
// };

// createButton.addEventListener("click", createTodo);
// input.addEventListener("keydown", (e) =>
//   e.keyCode === 13 ? createTodo() : false
// );
//
//
// урок 5
// ТЕМА Дом - дерево
// метод 1 createElement() //
// Метод createElement позволяет создать новый элемент,
//  передав в параметре имя тега. После создания
//  с элементом можно работать как с обычным элементом,
//  а также его можно добавить на страницу методами prepend ,
//  append , appendChild , insertBefore или insertAdjacentElement .
//
//
// пример
// const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "delete";
//     div.appendChild(deleteBtn);
//     deleteBtn.addEventListener("click", (e) => {
//       todoList.removeChild(div);
// });
//
//
//
//
//
// Метод 2   setAttribute()
// Метод setAttribute()
// setAttribute() Добавляет новый атрибут
//  или изменяет значение существующего
//  атрибута у выбранного элемента
