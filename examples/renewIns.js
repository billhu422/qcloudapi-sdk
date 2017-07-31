var Capi = require('../../qcloudapi-sdk')

var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})

var instanceChargePrepaid = {
    Period:2,
    RenewFlag:'NOTIFY_AND_AUTO_RENEW'
}
capi.request({
    Region: 'bj',
    Action: 'RenewInstances',
    Version:'2017-03-12',
    InstanceChargePrepaid:instanceChargePrepaid
    InstanceIds:[]
}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data);
    console.log(data.instanceSet[0].unInstanceId);
    console.log(data.instanceSet);
})

