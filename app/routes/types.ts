import type {
  Collection,
  Audio,
  Profile,
  Playlist,
  Transaction,
  Block,
  EndpointParams,
  MetaProps,
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
  params: {};
  request: Request;
}

export interface playlistLoaderParams {
  params: {};
  request: Request;
}

export interface profileLoaderParams {
  params: {};
  request: Request;
}

export interface ListLoaderProps {
  params: {};
  request: Request;
}
