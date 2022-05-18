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
      "KeyId": "f98ddf0b-8ec0-4a46-9c94-233f08f897ea",
      "KeyVersionId": "43d9535f-09df-425f-b5a6-63d77756c891",
    },
    {
      "KeyId": "bf2e73d3-aeb8-4325-b1f1-8bbd681742bb",
      "KeyVersionId": "a1b2b01a-8f68-438f-badc-5cd9902556e0",
    }
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
