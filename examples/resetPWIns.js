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
    Action: 'ResetInstancesPassword',
    Version: '2017-03-12',
    InstanceIds: ['ins-lxjd1gpb'],
    Password:'12873hahds1',
 //   UserName:'aaa',
    ForceStop:true
}, {
    serviceType: 'cvm'
}, function(error, data) {
    if (error){
        console.log(error);
    }else{
        console.log(data)
    }
})
