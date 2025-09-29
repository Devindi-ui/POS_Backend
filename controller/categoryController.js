const categoryModel = require('../model/categoryModel');

const categoryController = {  //Async keyword tyena line ek execute wenkl anit ewa execute wennh
    createCategory: async(req, res) => {
        try {
            const {category_name} = req.body;
            categoryModel.create(
                {category_name}, (err, result) => {
                    if(err){
                        return res.status(500).
                        json({message: 'Database error', error: err.message});
                    }
                    res.status(201).
                    json({message: 'Category created successfully', data: result});
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({message: 'Server error', error: error.message});
        }
    } 
}

module.exports = categoryController;