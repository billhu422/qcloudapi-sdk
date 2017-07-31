var Capi = require('../../qcloudapi-sdk')
var assign = require('object-assign')

var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})


var x = {
    'region': 'sh'
  }
var params = assign({    Region: 'sh',
    Action: 'NS.BGPIP.GetServicePacks'},x)

capi.request(params, {
    serviceType: 'csec'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})

var qs = capi.generateQueryString({
    Region: 'sh',
    Action: 'NS.BGPIP.GetServicePacks',
    'region': 'sh',
    'paging.index': 0,
    'paging.count': 1
}, {
    serviceType: 'csec'
},function(error,data){
	console.log(JSON.stringify(data)); 
})

console.log(qs);
