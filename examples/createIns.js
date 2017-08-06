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
//console.log(JSON.stringify(params,4,4));


var createInsJson =
    {
    Region: undefined,
    Action: 'RunInstances',
    Version: "2017-03-12",
    InstanceChargeType: undefined,
    InstanceChargePrepaid: {
        Period: undefined,
        RenewFlag: undefined
    },
    Placement: {
        Zone: undefined,
        ProjectId: undefined,
        HostIds : undefined
    },
    InstanceType: undefined,
    ImageId: undefined,
    SystemDisk: {
        DiskType: undefined,
        DiskId:undefined,
        DiskSize: undefined
    },
    VirtualPrivateCloud: {
        VpcId: undefined,
        SubnetId: undefined,
        AsVpcGateway:undefined,
        PrivateIpAddresses:undefined
    },
    InternetAccessible: {
        InternetChargeType: undefined,
        InternetMaxBandwidthOut: undefined,
        PublicIpAssigned: undefined
    },
    InstanceCount: undefined,
    InstanceName: undefined,
    LoginSettings: {
        Password: undefined,
        KeyIds:undefined,
        KeepImageLogin: undefined,
    },
    EnhancedService: {
        SecurityService: {
            Enabled: undefined
        },
        MonitorService: {
            Enabled: undefined
        }
    },
    ClientToken: undefined
}

createInsJson.Region = 'bj';
//createInsJson.InstanceChargeType = 'PREPAID';
createInsJson.InstanceChargePrepaid.Period = 1;
createInsJson.InstanceChargePrepaid.RenewFlag = 'NOTIFY_AND_AUTO_RENEW';
createInsJson.Placement = {
    Zone: 'ap-beijing-1',
    ProjectId: undefined,
    HostIds: undefined //['abc']
}
createInsJson.InstanceType = 'S1.SMALL1';
createInsJson.ImageId = 'img-dkwyg6sr';
/*createInsJson.SystemDisk = {
    DiskType:'LOCAL_BASIC',
    DiskId: undefined, //not supported temporarily by qcloud
    DiskSize: 50
};*/
createInsJson.InternetAccessible = {
//    InternetChargeType : 'BANDWIDTH_PREPAID',
    InternetMaxBandwidthOut : 1,
 //   PublicIpAssigned: true
};
createInsJson.InstanceCount = 1;
//createInsJson.InstanceName = 'test';
/*createInsJson.LoginSettings = {
    Password: '123%abcABC1',
    KeyIds:undefined,
    KeepImageLogin:false
};*/
createInsJson.ClientToken = randomstring.generate(64);

console.log(JSON.stringify(createInsJson,4,4));

capi.request(JSON.parse(JSON.stringify(createInsJson)),{
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data)
})


