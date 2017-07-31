var Capi = require('../../qcloudapi-sdk')

var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})

/*capi.request({
    Region: 'gz',
    Action: 'DescribeProject',
    otherParam: 'otherParam'
}, function(error, data) {
    console.log(data)
})
*/

capi.request({
    Region: 'bj',
    Action: 'RestartInstances',
    'instanceIds.0': 'ins-1j9d7p3f'
}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data)
})

var qs = capi.generateQueryString({
    Region: 'bj',
    Action: 'DescribeInstances',
    otherParam: 'otherParam'
}, {
    serviceType: 'cvm'
},function(error,data){
	console.log(data);
})

console.log(qs);

