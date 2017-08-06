var Capi = require('../../qcloudapi-sdk')

var config = require('./config')
var capi = new Capi({
    SecretId: config.qcloud.SecretId,
    SecretKey: config.qcloud.SecretKey,
    serviceType: 'account'
})
capi.request({
    Region: 'gz',
    Action: 'DescribeRegions',
}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})

/*{
    "totalCount": 2,
    "zoneSet": [
        {
            "zone": "ap-beijing-1",
            "zoneName": "北京一区",
            "zoneId": "800001",
            "zoneState": "AVAILABLE"
        },
        {
            "zone": "ap-beijing-2",
            "zoneName": "北京二区",
            "zoneId": "800002",
            "zoneState": "AVAILABLE"
        }
    ],
    "code": 0,
    "message": "",
    "codeDesc": "Success"
}*/
