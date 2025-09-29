const db = require('../config/database');

class Item{
    create = (itemData, result) => {
        const sql =
        'INSERT INTO item(category_id, name, `desc`, unit_price, img_url, status) VALUES(?, ?, ?, ?, ?, ?)';
        db.execute(sql, [
            itemData.category_id,
            itemData.name,
            itemData.desc,
            itemData.unit_price,
            itemData.img_url,
            itemData.status
        ],result);
    }

    findAll = (result) => {
        const sql = 'SELECT name, unit_price, category_id, category_name FROM item INNER JOIN category ON item.category_id = category.id';
    }
}

module.exports = new Item(); //bcz this is not static function