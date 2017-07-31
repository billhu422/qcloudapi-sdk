var Capi = require('../../qcloudapi-sdk')
var assign = require('object-assign')
var config = require('./config')

var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})


var x = {
    'region': 4,
    'timeSpan' : 1,
    'timeUnit' : 'm',
    'goodsNum' : 1,
    'bandwidth' : 10,
    'elastic' : 1
  }
var params = assign({    Region: 4,
    Action: 'BgpipCheckCreate'},x)

capi.request(params, {
    serviceType: 'bgpip'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})

var qs = capi.generateQueryString(
    params, {
    serviceType: 'bgpip'
},function(error,data){
	console.log(JSON.stringify(data)); 
})

console.log(qs);
