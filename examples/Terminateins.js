var Capi = require('../../qcloudapi-sdk')
var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})

capi.request({
    Region: 'bj',
    Action: 'TerminateInstances',
    InstanceIds:[]
}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data);
    console.log(data.instanceSet[0].unInstanceId);
    console.log(data.instanceSet);
})

