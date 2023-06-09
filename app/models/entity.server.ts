import type {
  NetworkStatus,
  Subscription,
  Collection,
  Profile,
  Audio,
  Block,
  Transaction,
  EndpointParams,
  AwaitedEndpointResult,
  Generator,
} from '~/configs/types';
import { API_URLS, API_VERSION } from '~/configs/api';
import { removeNullValues } from '~/helpers/helpers';

const getList = (entity: string, params: EndpointParams) => {
  const validatedParams = removeNullValues(params);
  const search = new URLSearchParams(validatedParams);
  const queryString = search.toString();
  return fetch(`${API_URLS.STREAMER}/api/${API_VERSION}/${entity}?${queryString}`).then((res) => res.json());
};

export async function getCollections({ params }: { params: EndpointParams }): AwaitedEndpointResult<Array<Collection>> {
  return getList('collections', params);
}

export async function getAudios({ params }: { params: EndpointParams }): AwaitedEndpointResult<Array<Audio>> {
  return getList('audios', params);
}

export async function getProfiles({ params }: { params: EndpointParams }): AwaitedEndpointResult<Array<Profile>> {
  return getList('profiles', params);
}

export async function getTransactions({ params }: { params: EndpointParams }): AwaitedEndpointResult<Array<Transaction>> {
  return getList('transactions', params);
}

export async function getBlocks({ params }: { params: EndpointParams }): AwaitedEndpointResult<Array<Block>> {
  return getList('blocks', params);
}

export async function getSubscriptions({ params }: { params: EndpointParams }): AwaitedEndpointResult<Array<Subscription>> {
  return getList('subscriptions', params);
}

export async function getGenerators({ params }: { params: EndpointParams }): AwaitedEndpointResult<Array<Generator>> {
  return getList('generators', params);
}

export async function getNetworkStatus(): Promise<NetworkStatus> {
  return getList('network/status', {});
}
