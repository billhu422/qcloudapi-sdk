var Capi = require('../../qcloudapi-sdk')
var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})

capi.request({
    Action: 'DescribeProject',
    Version:'2017-03-12',
}, {
    serviceType: 'account'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})