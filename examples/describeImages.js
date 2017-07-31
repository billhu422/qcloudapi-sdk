var Capi = require('../../qcloudapi-sdk')

var capi = new Capi({
    SecretId: 'AKIDJUTGrGYTQAlGvRoBKJ8mEbmnMp7LnRDn',
    SecretKey: 'hEammaiiXTGzXv9C9zdIrXO4Zs21xAD8',
    serviceType: 'account'
})

capi.request({
    Region: 'bj',
    Action: 'DescribeImages',
    Version:'2017-03-12',
}, {
    serviceType: 'image'
}, function(error, data) {
    console.log(JSON.stringify(data,4,4));
})
/*{
    "Response": {
        "ImageSet": [
            {
                "ImageId": "img-dkwyg6sr",
                "OsName": "CentOS 7.3 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 7.3 64位",
                "ImageDescription": "CentOS 7.3 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-31tjrtph",
                "OsName": "CentOS 7.2 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 7.2 64位",
                "ImageDescription": "CentOS 7.2 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-9q2lxkar",
                "OsName": "CentOS 7.1 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 7.1 64位",
                "ImageDescription": "CentOS 7.1 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-b1ve77s9",
                "OsName": "CentOS 7.0 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 7.0 64位",
                "ImageDescription": "CentOS 7.0 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-mv100ns3",
                "OsName": "CentOS 6.8 32位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.8 32位",
                "ImageDescription": "CentOS 6.8 32位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-6ns5om13",
                "OsName": "CentOS 6.8 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.8 64位",
                "ImageDescription": "CentOS 6.8 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-ljriodz5",
                "OsName": "CentOS 6.7 32位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.7 32位",
                "ImageDescription": "CentOS 6.7 32位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-9iwld2rx",
                "OsName": "CentOS 6.7 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.7 64位",
                "ImageDescription": "CentOS 6.7 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-5jbd8jxn",
                "OsName": "CentOS 6.6 32位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.6 32位",
                "ImageDescription": "CentOS 6.6 32位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-h5le2uy5",
                "OsName": "CentOS 6.6 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.6 64位",
                "ImageDescription": "CentOS 6.6 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-7uq6rrhr",
                "OsName": "CentOS 6.5 32位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.5 32位",
                "ImageDescription": "CentOS 6.5 32位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-7fwdvfur",
                "OsName": "CentOS 6.5 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.5 64位",
                "ImageDescription": "CentOS 6.5 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-k09t26i1",
                "OsName": "CentOS 6.4 32位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.4 32位",
                "ImageDescription": "CentOS 6.4 32位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-jlo93805",
                "OsName": "CentOS 6.4 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.4 64位",
                "ImageDescription": "CentOS 6.4 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-1afi29f3",
                "OsName": "CentOS 6.3 32位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.3 32位",
                "ImageDescription": "CentOS 6.3 32位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-4w43a15z",
                "OsName": "CentOS 6.3 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.3 64位",
                "ImageDescription": "CentOS 6.3 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-50mr2ow7",
                "OsName": "CentOS 6.2 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CentOS 6.2 64位",
                "ImageDescription": "CentOS 6.2 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-6mre94jv",
                "OsName": "CoreOS 717.3.0 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "CoreOS 717.3.0 64位",
                "ImageDescription": "CoreOS 717.3.0 64位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-ez7jwngr",
                "OsName": "Debian 8.2 32位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "Debian 8.2 32位",
                "ImageDescription": "Debian 8.2 32位",
                "ImageCreator": null,
                "OperationMask": 7
            },
            {
                "ImageId": "img-hi93l4ht",
                "OsName": "Debian 8.2 64位",
                "ImageSize": 50,
                "ImageType": "PUBLIC_IMAGE",
                "CreatedTime": null,
                "ImageState": "NORMAL",
                "ImageSource": "OFFICIAL",
                "ImageName": "Debian 8.2 64位",
                "ImageDescription": "Debian 8.2 64位",
                "ImageCreator": null,
                "OperationMask": 7
            }
        ],
        "TotalCount": 40,
        "RequestId": "2f4c9139-11d8-4f4c-8e60-735ed36d49bb"
    }
}*/

