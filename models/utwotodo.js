const utwotodos = [
    {utwotodo: 'Think about project 2', done: true},
    {utwotodo: 'Work on project 2', done: false},
    {utwotodo: 'Style project 2 ', done: false},
    {utwotodo: 'Present project 2 ', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function create(todo) {
    utwotodos.push(todo);
  }
  
  function getOne(id) {
    return utwotodos[id];
  }
  function getAll() {
    return utwotodos;
  }