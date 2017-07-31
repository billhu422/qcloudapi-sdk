var Capi = require('../../qcloudapi-sdk')
var randomstring = require('randomstring')
var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})
var instanceChargePrepaid =  {
    Period:1,
    RenewFlag:'NOTIFY_AND_AUTO_RENEW'
}

var placement = {
    Zone:'ap-beijing-1',
    ProjectId: undefined,
    HostIds : undefined //['abc']
}

var systemDisk = {
    DiskType:'LOCAL_BASIC',
    DiskId: undefined, //not supported temporarily by qcloud
    DiskSize: 50
}


var virtualPrivateCloud = {
    VpcId: undefined,
    SubnetId: undefined,
    AsVpcGateway:undefined,
    PrivateIpAddresses:undefined
}

var internetAccessible = {
    InternetChargeType : 'BANDWIDTH_PREPAID',
    InternetMaxBandwidthOut : 1,
    PublicIpAssigned: true
}

var loginSettings = {
    Password: '123%abcABC1',
    KeyIds:undefined,
    KeepImageLogin:false
}


var enhancedService = {
    SecurityService:{
        Enabled:true
    },
    MonitorService:{
        Enabled:true
    }
}

var params = {
    Region: 'bj',
    Action: 'RunInstances',
    Version:'2017-03-12',
    InstanceChargeType:'PREPAID',
    InstanceChargePrepaid:instanceChargePrepaid,
    Placement:placement,
    InstanceType:'S1.SMALL1',   //call related interface
    ImageId:'img-dkwyg6sr',     //call related interface
    SystemDisk:systemDisk,
    DataDisks:undefined,  //['abc']实例数据盘配置信息。若不指定该参数，则默认不购买数据盘，当前仅支持购买的时候指定一个数据盘。
    VirtualPrivateCloud:virtualPrivateCloud, //暂时只实现基础网络
    InternetAccessible:internetAccessible,
    InstanceCount:1,
    InstanceName: 'test',
    LoginSettings:loginSettings,
    SecurityGroupIds:undefined, //[] 当前仅支持购买的时候指定一个安全组。
    EnhancedService:enhancedService,
    ClientToken:randomstring.generate(64)
};

//params.EnhancedService = undefined;
console.log(JSON.stringify(params,4,4));
capi.request(JSON.parse(JSON.stringify(params)),{
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data)
})


