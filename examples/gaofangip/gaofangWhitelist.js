var Capi = require('../../../qcloudapi-sdk')
var config = require('../config')

var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})

capi.request({
    Region: 'bj',
    Action: 'NS.BGPIP.Whitelist.Get',
}, {
    serviceType: 'csec'
}, function(error, data) {
    console.log(data)
})

var qs = capi.generateQueryString({
    Region: 'bj',
    Action: 'NS.BGPIP.Whitelist.Get',
}, {
    serviceType: 'csec'
},function(error,data){
	console.log(data);
})

console.log(qs);
