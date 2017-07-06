var Capi = require('../../qcloudapi-sdk')

var capi = new Capi({
    SecretId: 'AKIDJUTGrGYTQAlGvRoBKJ8mEbmnMp7LnRDn',
    SecretKey: 'hEammaiiXTGzXv9C9zdIrXO4Zs21xAD8',
    serviceType: 'account'
})

capi.request({
    Region: 'bj',
    Action: 'NS.BGPIP.Whitelist.Get',
}, {
    serviceType: 'csec'
}, function(error, data) {
    console.log(data)
})

var qs = capi.generateQueryString({
    Region: 'bj',
    Action: 'NS.BGPIP.Whitelist.Get',
}, {
    serviceType: 'csec'
},function(error,data){
	console.log(data);
})

console.log(qs);
