const itemModel = require('../model/itemModel');

const itemController = {
    createItem: (req, res) => {
        const{category_id, name, desc, unit_price, img_url, status} = req.body;

        try {
            if(!name || !desc || !unit_price || !img_url || !status || !category_id){
                return res.status(400).json({message: 'All parameters are required'});
            }

            itemModel.create(
                {
                    category_id: category_id,
                    name: name,
                    desc: desc,
                    unit_price: unit_price,
                    img_url:img_url,
                    status: status
                }, (err, result) => {
                    if(err){
                        return res.status(500).
                        json({message: 'Database error', error: err.message});
                    }
                    res.status(201).
                    json({message: 'Item created successfully', data: result});
                }
            );

        } catch (error) {
            return res.status(500).
            json({message: 'Server error', error: error.message});
        }
    }
}

module.exports = itemController;