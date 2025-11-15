const db = require('./db.config');

const User = {
  getAll: callback => {
    db.query('SELECT * FROM users', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [id], callback);
  },

  create: (data, callback) => {
    db.query('INSERT INTO users SET ?', data, callback);
  },

  update: (id, data, callback) => {
    const fields = [];
    const values = [];

    for (const key in data) {
      if (typeof data[key] !== 'undefined') {
        fields.push(`${key} = ?`);
        values.push(data[key]);
      }
    }

    if (fields.length === 0) {
      return callback(null, { message: 'No fields to update' });
    }

    values.push(id);
    const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`;

    db.query(sql, values, (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  },

  delete: (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], callback);
  }
};

module.exports = User;
