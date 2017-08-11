var ingress =
   [ { index: 0,
       action: 'ACCEPT',
       cidrIp: '2.3.4.5',
       portRange: '100-110',
       ipProtocol: 'tcp' },
     { index: 1,
       action: 'ACCEPT',
       cidrIp: '1.1.1.3',
       portRange: '90,91,92',
       ipProtocol: 'tcp' },
     { index: 2,
       action: 'ACCEPT',
       cidrIp: '11.1.1.2',
       portRange: '80',
       ipProtocol: 'tcp' } ]


var ingress_fmt = [];
for(i in ingress){
    var rule = ingress[i];
    if(rule.action.toUpperCase() != 'ACCEPT')
        continue;

    if(rule.portRange === '' || rule.portRange === null ) {
        console.log("error");
    }else if(rule.portRange.split(',')[1] != undefined) {
            //console.log(", 格式");
            for( j in rule.portRange.split(',')){
                var rule_j = {
                    cidrIp: rule.cidrIp,
                    from_port: rule.portRange.split(',')[j],
                    to_port:rule.portRange.split(',')[j],
                    ipProtocol: rule.ipProtocol
                }
                ingress_fmt.push(rule_j);
            }
    } else if(rule.portRange.split('-')[1] != undefined){
        //console.log("range");
        var rule_j = {
                    cidrIp: rule.cidrIp,
                    from_port: rule.portRange.split('-')[0],
                    to_port:rule.portRange.split('-')[1],
                    ipProtocol: rule.ipProtocol
        }
        ingress_fmt.push(rule_j);
    }else {
        //console.log("unkown format");
        var rule_j = {
                    cidrIp: rule.cidrIp,
                    from_port: rule.portRange,
                    to_port:rule.portRange,
                    ipProtocol: rule.ipProtocol
        }
        ingress_fmt.push(rule_j);
    }
}

console.log(JSON.stringify(ingress_fmt,4,4));