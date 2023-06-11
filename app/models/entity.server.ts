import type{ Collection, Profile, Audio, EndpointParams } from '~/configs/types';
import { API_URLS, API_VERSION } from '~/configs/api';

const get = (url: string) => fetch(url).then((res) => res.json()).then(res => res.data);

export async function getCollections({ params }: EndpointParams): Promise<Array<Collection>> {
  const queryParams = new URLSearchParams(params);
  console.log(queryParams);
  return get(`${API_URLS.STREAMER}/api/${API_VERSION}/collections`).then(res => res);
}

export async function getAudios({ params }: EndpointParams): Promise<Array<Audio>> {
  const queryParams = new URLSearchParams(params);
  console.log(queryParams);
  return get(`${API_URLS.STREAMER}/api/${API_VERSION}/audios`);
}

export async function getProfiles({ params }: EndpointParams): Promise<Array<Profile>> {
  const queryParams = new URLSearchParams(params);
  console.log(queryParams);
  return get(`${API_URLS.STREAMER}/api/${API_VERSION}/profiles`);
}
