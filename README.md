# zswjs-alibaba-cloud-kms
## 中数文联盟链JS SDK - 阿里云KMS密钥管理系统Plugin


## Usage
```js
const { JsonRpc, API } = require("zswjs");
const { AlibabaCloudKMSignatureProvider } = require("zswjs-alibaba-cloud-kms");

function signTransactionDemo() {
  
  const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });
  const clientConfig = {
    accessKeyId: '<your-access-key-id>',
    accessKeySecret: '<your-access-key-secret>',
    endpoint: 'https://kms.cn-hangzhou.aliyuncs.com',
    apiVersion: '2016-01-20'
  };
  const regionId = 'cn-hangzhou';
  const keys = [
    {
      "KeyId": "<your-key-id>",
      "KeyVersionId": "<your-key-version-id>",
    },
  ];
  const signatureProvider = new AlibabaCloudKMSignatureProvider(
    clientConfig,
    regionId,
    keys,
  );
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

  // await api.transact(...)
}
```
