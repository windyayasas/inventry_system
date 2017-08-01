'use strict';

module.exports = function (Invoice) {


    Invoice.addInvoice = function (paymentDueDate, currency, paidAmount, callback) {

        paymentDueDate = new Date(paymentDueDate);
        var creatObj = {
            issueDate: new Date(),
            paymentDue: paymentDueDate,
            currency: currency,
            total: paidAmount,
            paidAmount: paidAmount,
            lastUpdate: new Date()
        }
        Invoice.create(creatObj, function (err, result) {
            if (err)
            {
                callback(err, null);
            }
            else {
                callback(err, "success");
            }
        });
    }
    Invoice.remoteMethod(
            'addInvoice',
            {
                description: 'Add invoice',
                accepts: [
                    {arg: 'paymentDueDate', type: 'string', required: true},
                    {arg: 'currency', type: 'string', required: true},
                    {arg: 'paidAmount', type: 'number', required: true}
                ],
                returns: {type: 'string', arg: 'result'},
                http: {verb: 'post'}
            }
    );

};
