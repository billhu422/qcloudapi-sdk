var Capi = require('../../../qcloudapi-sdk')
var config = require('../config')
var assing = require('object-assign')


var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
});

capi.request({
    Region: 'bj',
    Action: 'NS.BGPIP.ServicePack.AddTransRules',
    'bgpId':'1',
    'vip':'11.10.11.11',
    'protocol':'TCP',
    'virtualPort':'8000',
    'sourcePort':'80',
    'ipList':'11.10.11.14'
},{
    serviceType: 'csec'
},function(error,data){
    console.log(data);
});