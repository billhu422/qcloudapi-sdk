var Capi = require('../../../qcloudapi-sdk')
var assign = require('object-assign')
var config = require('../config')

var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
});

capi.request({
    Region: 'bj',
    Action: 'NS.BGPIP.ServicePack.SetCCThreshold',
    'bgpId': '0001',
    'threshold': '20000'
},{
    serviceType: 'csec'
},function(error,data){
    console.log(data);
});