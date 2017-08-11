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
    Action: 'CreateSecurityGroup',
    sgName:'001',//opt
    sgRemark:'xxx2',//opt
    ProjectId:'1057374'//opt
}, {
    serviceType: 'dfw'
}, function(error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})