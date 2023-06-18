import type {
  Collection,
  Audio,
  Profile,
  Playlist,
  Transaction,
  Block,
  EndpointParams,
  MetaProps,
  Subscription,
  NetworkStatus,
} from '~/configs';

export interface LoaderData<T> {
  data: Awaited<T[]>;
  meta: MetaProps;
  params: EndpointParams;
}

export interface TransactionsLoaderData extends LoaderData<Transaction> {
  data: Awaited<Transaction[]>;
}

export interface CollectionsLoaderData extends LoaderData<Collection> {
  data: Awaited<Collection[]>;
}

export interface BlocksLoaderData extends LoaderData<Block> {
  data: Awaited<Block[]>;
}

export interface AudiosLoaderData extends LoaderData<Audio> {
  data: Awaited<Audio[]>;
}

export interface SubscriptionsLoaderData extends LoaderData<Subscription> {
  data: Awaited<Subscription[]>;
}

export interface DetailsLoaderData<T> {
  data: Awaited<T>;
  id: string;
}

export interface HomeLoaderData {
  networkStatus: Awaited<NetworkStatus>;
  blocks: Awaited<Block[]>;
  transactions: Awaited<Transaction[]>;
}

export interface PlaylistLoaderData {
  playlist: Awaited<Playlist>;
  audios: Awaited<Audio[]>;
  id: number;
}

export interface ProfileLoaderData {
  profile: Awaited<Profile>;
  collections: Awaited<Collection[]>;
  audios: Awaited<Audio[]>;
  id: string;
}

export interface LoaderBaseProps {
  request: Request;
  params: EndpointParams;
}

export interface collectionsLoaderParams {
  params: Record<string, never>;
  request: Request;
}

export interface playlistLoaderParams {
  params: Record<string, never>;
  request: Request;
}

export interface profileLoaderParams {
  params: Record<string, never>;
  request: Request;
}

export interface ListLoaderProps {
  params: Record<string, never>;
  request: Request;
}

export interface DetailsLoaderProps {
  params: Record<string, string>;
  request: Request;
}
