var app = angular.module('todo', [])

app.controller('todoController', function(){
  
  var todolist = this;
  
  todolist.todos = [
    {message: 'Fix drain', done: true},
    {message: 'Paint wall', done: false},
    {message: 'Fly to moon', done: false}
  ];
  
  todolist.addTodo = function(){
    todolist.todos.push({ message: todolist.todoText, done: false });
    todolist.todoText = '';
  };
  
  todolist.removeTodo = function(index){
    todolist.todos.splice(index, 1);
  };
  
  todolist.remaining = function(){
    
    var count = 0;
    todolist.todos.forEach(function(todo){
      
      count += todo.done ? 1 : 0;
      
    });
    
    return count;
  };
  
});