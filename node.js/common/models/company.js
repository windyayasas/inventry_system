'use strict';

module.exports = function(Company) {

	Company.addCompany = function (name, type, taxNumber, phoneNumber, faxNumber, website, email, description, tag, defaultPriceList, defaultDiscount, defaultPaymentMethod, defaultStockLocation, assignedTo, addressName, country, addressLine01, addressLine02, city, state, zipCode, callback) {

        var creatObj = {
            name: name,
            type: type,
            taxNumber: taxNumber,
            phoneNumber: phoneNumber,
            faxNumber: faxNumber,
            website: website,
            email: email,
            description: description,
            tag: tag,
            defaultPriceList: defaultPriceList,
            defaultDiscount: defaultDiscount,
            defaultPaymentMethod: defaultPaymentMethod,
            defaultStockLocation: defaultStockLocation,
            assignedTo: assignedTo,
            addressName: addressName,
            country: country,
            addressLine01: addressLine01,
            addressLine02: addressLine02,
            city: city,
            state: state,
            zipCode: zipCode
        }
        Company.create(creatObj, function (err, result) {
            if (err)
            {
                callback(err, null);
            }
            else {
                callback(err, "success");
            }
        });
    }
    Company.remoteMethod(
            'addCompany',
            {
                description: 'Add company',
                accepts: [
                    {arg: 'name', type: 'string', required: true},
                    {arg: 'type', type: 'string', required: true},
                    {arg: 'taxNumber', type: 'number', required: true},
                    {arg: 'phoneNumber', type: 'number', required: true},
                    {arg: 'faxNumber', type: 'number'},
                    {arg: 'website', type: 'string'}
                    {arg: 'email', type: 'string', required: true},
                    {arg: 'description', type: 'string', required: true},
                    {arg: 'tag', type: 'string', required: true},
                    {arg: 'defaultPriceList', type: 'string', required: true},
                    {arg: 'defaultDiscount', type: 'number', required: true},
                    {arg: 'defaultPaymentMethod', type: 'string', required: true},
                    {arg: 'defaultStockLocation', type: 'string'},
                    {arg: 'assignedTo', type: 'string', required: true},
                    {arg: 'addressName', type: 'string', required: true},
                    {arg: 'country', type: 'string', required: true},
                    {arg: 'addressLine01', type: 'string', required: true},
                    {arg: 'addressLine02', type: 'string', required: true},
                    {arg: 'city', type: 'string', required: true},
                    {arg: 'state', type: 'string', required: true},
                    {arg: 'zipCode', type: 'number', required: true}
                ],
                returns: {type: 'string', arg: 'result'},
                http: {verb: 'post'}
            }
    );

};
