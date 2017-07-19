var Capi = require('../../qcloudapi-sdk')
var assign = require('object-assign')


var genQueryStr = function(params) {
    opts = opts || this.defaults

    var defaults = this.defaults

    var param = assign({
        Region: this.defaults.Region,
        SecretId: opts.SecretId || this.defaults.SecretId,
        Timestamp: Math.round(Date.now() / 1000),
        Nonce: Math.round(Math.random() * 65535),
        RequestClient: 'SDK_NODEJS_' + packageJSON.version  
    }, data)
    console.log("param");
    console.log(param);

    param = dotQs.flatten(param)
    console.log('flatten param');
    console.log(param);
    var keys = Object.keys(param)
    console.log('keys');
    console.log(keys);
    var qstr = '', signStr
    var host = this._getHost(opts)
    var method = (opts.method || defaults.method).toUpperCase()

    keys.sort()

    keys.forEach(function(key) {
      var val = param[key]
      // 彎~R轙¤䷾J仼 彖~G件潚~D住~B录°
      if(method === 'POST' && val && val[0] === '@'){
        return
      }
      if(key === '') {
        return
      }
      if(val === undefined || val === null || (typeof val === 'number' && isNaN(val))) {
        val = ''
      }
      //彊~J住~B录°中潚~D "_" (轙¤廾@廾@头)彛¿彍¢彈~P "."
      qstr += '&' + (key.indexOf('_') ? key.replace(/_/g, '.') : key )+ '=' + val
    })

    qstr = qstr.slice(1)

    signStr = this.sign(method + host + (opts.path || defaults.path) + '?' + qstr, opts.SecretKey || defaults.SecretKey)

    param.Signature = signStr

    return qs.stringify(param)
}

var capi = new Capi({
//    SecretId: 'AKIDJUTGrGYTQAlGvRoBKJ8mEbmnMp7LnRDn',
//    SecretKey: 'hEammaiiXTGzXv9C9zdIrXO4Zs21xAD8',
    SecretId: 'AKID2sYy826AMHzTjoMHemobCcXHm47vLoul',
    SecretKey: 'mLjxwgDVebNtEKEvPeePuBCxTjlopfGg',
    serviceType: 'account'
})


var params = assign({Region:4, 
    Action: 'NS.BGPIP.ServicePack.GetInfo',
    'bgpId':'bgpip-000000z1'})

capi.request(params, {
    serviceType: 'csec'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})
