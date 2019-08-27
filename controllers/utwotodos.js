const Utwotodo = require('../models/utwotodo');

module.exports = {
    index,
    create,
    new: newUtwotodo,

}

function index(req, res) {
    res.render('/', {
        utwotodos: Utwotodo.getAll()
    });
}
function create(req, res) {
    utwotodo.push(req.body);
    utwotodo.save(function(err) {
        res.render('/', utwotodos);
    });
};

function newUtwotodo(req, res) {
    res.render('/');
}


// function create(req, res) {
//     console.log(req.body);
//     req.body.done = false;
//     Utwotodo.create(req.body);
//     res.render('/index');
//   }