var Capi = require('../../qcloudapi-sdk')
var assign = require('object-assign')

var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})


var params = assign({Region:4, 
    Action: 'NS.BGPIP.ServicePack.GetInfo',
    'bgpId':'bgpip-000000z1'})

capi.request(params, {
    serviceType: 'csec'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})
