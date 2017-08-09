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
    Action: 'DeleteSecurityGroupPolicy',
    sgId:'sg-0zofvs3b',//Mandatory
//    version:1,//opt 版本，用户更新安全规则，每次更新安全规则版本会自动加1，防止你更新的路由规则已过期，不填不考虑冲突
    direction:'ingress',//Mandatory (ingress/egress)
    indexes:[1]//Mandatory

}, {
    serviceType: 'dfw'
}, function(error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(JSON.stringify(data,4,4));
    }
})