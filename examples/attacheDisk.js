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
    Action: 'AttachCbsStorages',
    storageIds:['disk-i5uo48td'],
    uInstanceId:'ins-lxjd1gpb',
}, {
    serviceType: 'cbs'
}, function(error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(JSON.stringify(data,4,4));
    }
})