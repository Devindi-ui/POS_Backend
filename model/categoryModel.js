const db = require('../config/database');

class Category {
    
    create = (categoryData, result) => {
        const sql = 'INSERT INTO category(category_name) VALUES(?)';
        db.execute(sql, [categoryData.category_name], result);
    }
}

module.exports = new Category(); //static function ekk newei nisa direct cl krnn bari nisa 'new'