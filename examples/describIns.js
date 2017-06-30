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
    Action: 'DescribeInstances'
}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data);
    console.log(data.instanceSet[0].unInstanceId);
    console.log(data.instanceSet);
//    console.log(JSON.parse(data)); 
//    console.log(JSON.stringify(data)['unInstanceId']);
//    console.log(JSON.stringify(JSON.parse(data),4,4));
})

var qs = capi.generateQueryString({
    Region: 'bj',
    Action: 'DescribeInstances'
}, {
    serviceType: 'cvm'
},function(error,data){
	console.log(data);
})

console.log(qs);

