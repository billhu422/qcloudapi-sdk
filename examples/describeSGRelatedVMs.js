var Capi = require('../../qcloudapi-sdk')

var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
});

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
    Action: 'DescribeInstancesOfSecurityGroup',
    sgId:'sg-0zofvs3b',//Mandatory
    offset:0, //opt 分页开始位置， 默认值: 0
    limit:19  //

}, {
    serviceType: 'dfw'
}, function(error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(JSON.stringify(data,4,4));
    }
})