import Core from '@alicloud/pop-core';
import { sm2PemToKeyString } from '../gmpem';

function getZSWPublicKeyStringForAlibabaKMSKeyId(client: Core, regionId: string, keyId: string, keyVersionId: string): Promise<string> {
  const params = {
    "RegionId": regionId,
    "KeyId": keyId,
    "KeyVersionId": keyVersionId,
  };
  return client.request('GetPublicKey', params, {
    method: 'POST'
  }).then((response: any)=>{
    if(response && typeof response.PublicKey === 'string' && response.PublicKey){
      return sm2PemToKeyString(response.PublicKey);
    }else{
      throw new Error("GetPublicKey: Invalid Response From Alibaba Cloud KMS!");
    }
  });
}
function signDigestAlibabaKMS(client: Core, regionId: string, keyId: string, keyVersionId: string, digestBase64: string): Promise<string> {
  const params = {
    "RegionId": regionId,
    "KeyId": keyId,
    "KeyVersionId": keyVersionId,
    "Algorithm": "SM2DSA",
    "Digest": digestBase64,
  };
  return client.request('GetPublicKey', params, {
    method: 'POST'
  }).then((response: any)=>{
    if(response && typeof response.Value === 'string' && response.Value){
      return response.Value;
    }else{
      throw new Error("AsymmetricSign: Invalid Response From Alibaba Cloud KMS!");
    }
  });
}

export {
  getZSWPublicKeyStringForAlibabaKMSKeyId,
  signDigestAlibabaKMS,
}