'use strict';

module.exports = function(Product) {

	Product.addProduct = function (name, type, brand, description, tag, initialCostPrice, buyPrice, wholesalePrice, retailPrice, initialStockLocation, initialStockOnHand, weight, batchTracked, callback) {

        var creatObj = {
            name: name,
            type: type,
            brand: brand,
            description: description,
            tag: tag,
            initialCostPrice: initialCostPrice,
            buyPrice: buyPrice,
            wholesalePrice: wholesalePrice,
            retailPrice: retailPrice,
            initialStockLocation: initialStockLocation,
            initialStockOnHand: initialStockOnHand, 
            weight: weight, 
            batchTracked: batchTracked,
            
        }
        Product.create(creatObj, function (err, result) {
            if (err)
            {
                callback(err, null);
            }
            else {
                callback(err, "success");
            }
        });
    }

    Product.remoteMethod(
            'addProduct',
            {
                description: 'Add Product',
                accepts: [
                    {arg: 'name', type: 'string', required: true},
                    {arg: 'type', type: 'string', required: true},
                    {arg: 'brand', type: 'string', required: true},
                    {arg: 'description', type: 'string', required: true},
                    {arg: 'tag', type: 'string'},
                    {arg: 'initialCostPrice', type: 'number', required: true},
                    {arg: 'buyPrice', type: 'number', required: true},
                    {arg: 'wholesalePrice', type: 'number', required: true},
                    {arg: 'retailPrice', type: 'number', required: true},
                    {arg: 'initialStockLocation', type: 'string', required: true},
                    {arg: 'initialStockOnHand', type: 'number', required: true},
                    {arg: 'weight', type: 'number'},
                    {arg: 'batchTracked', type: 'boolean', required: true}
                    
                ],
                returns: {type: 'string', arg: 'result'},
                http: {verb: 'post'}
            }
    );



};
