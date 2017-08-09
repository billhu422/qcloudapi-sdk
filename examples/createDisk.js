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
    Action: 'CreateCbsStorages',
  //  diskType:'root',
    payMode:'prePay',
    period:1,
//    projectId:'',
//    snapshotId:'',
    storageType:'cloudBasic',
    zone:'ap-beijing-2',
    goodsNum:1,
    storageSize:20,
    offset:0,
    limit:20
}, {
    serviceType: 'cbs'
}, function(error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(JSON.stringify(data,4,4));
    }
})