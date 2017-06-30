var Capi = require('../../qcloudapi-sdk')

var capi = new Capi({
    SecretId: 'AKIDJUTGrGYTQAlGvRoBKJ8mEbmnMp7LnRDn',
    SecretKey: 'hEammaiiXTGzXv9C9zdIrXO4Zs21xAD8',
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
    Action: 'StopInstances',
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

