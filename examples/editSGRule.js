var Capi = require('../../qcloudapi-sdk')
var dotQs = require('dot-qs')
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

var param = {
    Region: 'bj',
    Action: 'ModifySingleSecurityGroupPolicy',
    sgId:'sg-0zofvs3b',//Mandatory
//    version:1,//opt 版本，用户更新安全规则，每次更新安全规则版本会自动加1，防止你更新的路由规则已过期，不填不考虑冲突
    direction:'ingress',//Mandatory (ingress/egress)
    index:2,//Mandatory
    policys : [{//Mandatory
        ipProtocol:'tcp',//网络协议，支持udp、tcp、icmp等，无则表示全协议
        cidrIp:'1.1.1.0/24',
 //       sgId:'',
 //       addressModule:'',
        portRange:'22,23,24',
 //       serviceModule:'',
        desc:'xxx',
        action:'accept'//accept或者drop
    }]
}

var x = dotQs.flatten(param);
console.log(x);
capi.request(param, {
    serviceType: 'dfw'
}, function(error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(JSON.stringify(data,4,4));
    }
})