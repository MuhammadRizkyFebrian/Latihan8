const User = require('../models/user.model');

exports.getAll = (req, res) => {
  User.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

exports.getById = (req, res) => {
  User.getById(req.params.id, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  User.update(id, newData, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  User.delete(req.params.id, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send({ message: 'User deleted successfully' });
  });
};
