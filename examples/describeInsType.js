var Capi = require('../../qcloudapi-sdk')

var capi = new Capi({
    SecretId: 'AKIDJUTGrGYTQAlGvRoBKJ8mEbmnMp7LnRDn',
    SecretKey: 'hEammaiiXTGzXv9C9zdIrXO4Zs21xAD8',
    serviceType: 'account'
})

capi.request({
    Region: 'bj',
    Action: 'DescribeInstanceTypeConfigs',
    Version:'2017-03-12',
}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})

/*
response:
{
    "Response": {
        "InstanceTypeConfigSet": [
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.SMALL1",
                "CPU": 1,
                "Memory": 1
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.SMALL1",
                "CPU": 1,
                "Memory": 1
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.SMALL2",
                "CPU": 1,
                "Memory": 2
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.SMALL2",
                "CPU": 1,
                "Memory": 2
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.SMALL4",
                "CPU": 1,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.SMALL4",
                "CPU": 1,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.SMALL8",
                "CPU": 1,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.SMALL8",
                "CPU": 1,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.MEDIUM2",
                "CPU": 2,
                "Memory": 2
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.MEDIUM4",
                "CPU": 2,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.MEDIUM4",
                "CPU": 2,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.MEDIUM4",
                "CPU": 2,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.MEDIUM4",
                "CPU": 2,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.MEDIUM8",
                "CPU": 2,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.MEDIUM8",
                "CPU": 2,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.MEDIUM8",
                "CPU": 2,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.MEDIUM8",
                "CPU": 2,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.MEDIUM12",
                "CPU": 2,
                "Memory": 12
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.MEDIUM16",
                "CPU": 2,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.MEDIUM16",
                "CPU": 2,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.MEDIUM16",
                "CPU": 2,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.MEDIUM16",
                "CPU": 2,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.LARGE4",
                "CPU": 4,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.LARGE4",
                "CPU": 4,
                "Memory": 4
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.LARGE8",
                "CPU": 4,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.LARGE8",
                "CPU": 4,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.LARGE8",
                "CPU": 4,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.LARGE8",
                "CPU": 4,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.LARGE8",
                "CPU": 4,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.LARGE12",
                "CPU": 4,
                "Memory": 12
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.LARGE16",
                "CPU": 4,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.LARGE16",
                "CPU": 4,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.LARGE16",
                "CPU": 4,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.LARGE16",
                "CPU": 4,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.LARGE16",
                "CPU": 4,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.LARGE24",
                "CPU": 4,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.LARGE32",
                "CPU": 4,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.LARGE32",
                "CPU": 4,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.LARGE32",
                "CPU": 4,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.LARGE32",
                "CPU": 4,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.LARGE32",
                "CPU": 4,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.2XLARGE8",
                "CPU": 8,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.2XLARGE8",
                "CPU": 8,
                "Memory": 8
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.2XLARGE16",
                "CPU": 8,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.2XLARGE16",
                "CPU": 8,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.2XLARGE16",
                "CPU": 8,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.2XLARGE16",
                "CPU": 8,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.2XLARGE16",
                "CPU": 8,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.2XLARGE24",
                "CPU": 8,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.2XLARGE24",
                "CPU": 8,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.2XLARGE24",
                "CPU": 8,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.2XLARGE32",
                "CPU": 8,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.2XLARGE32",
                "CPU": 8,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.2XLARGE32",
                "CPU": 8,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.2XLARGE32",
                "CPU": 8,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.2XLARGE32",
                "CPU": 8,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.2XLARGE40",
                "CPU": 8,
                "Memory": 40
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.2XLARGE64",
                "CPU": 8,
                "Memory": 64
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.2XLARGE64",
                "CPU": 8,
                "Memory": 64
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.3XLARGE12",
                "CPU": 12,
                "Memory": 12
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.3XLARGE24",
                "CPU": 12,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.3XLARGE24",
                "CPU": 12,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.3XLARGE24",
                "CPU": 12,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.3XLARGE24",
                "CPU": 12,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.3XLARGE36",
                "CPU": 12,
                "Memory": 36
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.3XLARGE48",
                "CPU": 12,
                "Memory": 48
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.3XLARGE48",
                "CPU": 12,
                "Memory": 48
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.3XLARGE48",
                "CPU": 12,
                "Memory": 48
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.3XLARGE48",
                "CPU": 12,
                "Memory": 48
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.3XLARGE60",
                "CPU": 12,
                "Memory": 60
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.3XLARGE96",
                "CPU": 12,
                "Memory": 96
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.3XLARGE96",
                "CPU": 12,
                "Memory": 96
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.4XLARGE16",
                "CPU": 16,
                "Memory": 16
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.4XLARGE32",
                "CPU": 16,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.4XLARGE32",
                "CPU": 16,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.4XLARGE32",
                "CPU": 16,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.4XLARGE32",
                "CPU": 16,
                "Memory": 32
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.4XLARGE48",
                "CPU": 16,
                "Memory": 48
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.4XLARGE60",
                "CPU": 16,
                "Memory": 60
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.4XLARGE64",
                "CPU": 16,
                "Memory": 64
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.4XLARGE64",
                "CPU": 16,
                "Memory": 64
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.4XLARGE80",
                "CPU": 16,
                "Memory": 80
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.4XLARGE128",
                "CPU": 16,
                "Memory": 128
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.4XLARGE128",
                "CPU": 16,
                "Memory": 128
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.6XLARGE24",
                "CPU": 24,
                "Memory": 24
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.6XLARGE48",
                "CPU": 24,
                "Memory": 48
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.6XLARGE48",
                "CPU": 24,
                "Memory": 48
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.6XLARGE56",
                "CPU": 24,
                "Memory": 56
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.6XLARGE96",
                "CPU": 24,
                "Memory": 96
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.6XLARGE96",
                "CPU": 24,
                "Memory": 96
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.6XLARGE120",
                "CPU": 24,
                "Memory": 120
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.6XLARGE192",
                "CPU": 24,
                "Memory": 192
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.6XLARGE192",
                "CPU": 24,
                "Memory": 192
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "G2",
                "InstanceType": "G2.7XLARGE60",
                "CPU": 28,
                "Memory": 60
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "S1",
                "InstanceType": "S1.8XLARGE64",
                "CPU": 32,
                "Memory": 64
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.8XLARGE64",
                "CPU": 32,
                "Memory": 64
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "I2",
                "InstanceType": "I2.8XLARGE120",
                "CPU": 32,
                "Memory": 120
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "C2",
                "InstanceType": "C2.8XLARGE120",
                "CPU": 32,
                "Memory": 120
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "S2",
                "InstanceType": "S2.8XLARGE128",
                "CPU": 32,
                "Memory": 128
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.8XLARGE160",
                "CPU": 32,
                "Memory": 160
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.8XLARGE256",
                "CPU": 32,
                "Memory": 256
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.8XLARGE256",
                "CPU": 32,
                "Memory": 256
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "I1",
                "InstanceType": "I1.12XLARGE240",
                "CPU": 48,
                "Memory": 240
            },
            {
                "Zone": "ap-beijing-1",
                "InstanceFamily": "M1",
                "InstanceType": "M1.12XLARGE368",
                "CPU": 48,
                "Memory": 368
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "M2",
                "InstanceType": "M2.12XLARGE384",
                "CPU": 48,
                "Memory": 384
            },
            {
                "Zone": "ap-beijing-2",
                "InstanceFamily": "G2",
                "InstanceType": "G2.14XLARGE120",
                "CPU": 56,
                "Memory": 120
            }
        ],
        "RequestId": "be5bfe15-9044-4a3d-ac4d-d5dafc089e7a"
    }
}*/
