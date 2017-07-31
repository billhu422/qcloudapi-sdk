var Capi = require('../../qcloudapi-sdk')
var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})

var systemDisk ={
    DiskType:'LOCAL_BASIC',
    DiskId:undefined,
    DiskSize:20
}

var loginSettings ={
    Password:undefined,
    KeyIds:[],
    KeepImageLogin:'FALSE'
}

capi.request({
    Region: 'bj',
    Action: 'ResetInstance',
    InstanceId:'abc',
    ImageId:'aaa',
    SystemDisk:systemDisk,
    LoginSettings:loginSettings,
    EnhancedService:{
        SecurityService:{
            Enable:true
        },
        MonitorService:{
            Enable:true
        }
    }

}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data);
    console.log(data.instanceSet[0].unInstanceId);
    console.log(data.instanceSet);
})

