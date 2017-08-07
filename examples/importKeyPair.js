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
    Action: 'ImportKeyPair',
    Version:'2017-03-12',
    KeyName:'999',
    ProjectId:'1062715',
    PublicKey:'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDxH3+uh9vBP8ex74cEE9I4jr5e7HlQaeQrzov7YtCn2H5hdMeJymYELSFNzhAhNxgoyhpR+kALy0ItZq0Ee5dqZd0Ild3H9/BSfwMbJ1mhqtgQer3E4o73mUolsoPE67k6BVpUF3i/B8z+HeClc03+XdiCcpcmStfxHkok3rbMLfEQldU7UlLMH6q6DD1y6qEKE+I+oJYrpt8ATsLSVHrjHrghh6Wc6kVxu6ZFmi54LWJVxhkDrdHIwW9Rj/GZLJyMAMovap3Y30BOplQmG+gtRPfee0WgssVwUsnNz4ATqz/TqsTIHY9x28hJdwMbPTDm4riQm5MSHkzQiLOH0Ttx ubuntu@ubuntupc'
}, {
    serviceType: 'cvm'
}, function(error, data) {
    console.log(data);
})