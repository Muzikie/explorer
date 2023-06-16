interface BaseEntity {
  creatorAddress: string;
  name: string;
}

interface LoyaltyOwner {
  address: string;
  shares: number;
  income: string;
}

export enum CollectionType {
  Album = 1,
  PodcastSeries = 2,
}

export interface Collection extends BaseEntity {
  collectionType: CollectionType;
  audios: string[];
  releaseYear: string;
  collectionID: string;
  coverSignature: string;
  coverHash: string;
}

export enum SocialAccountPlatform {
  Instagram = 0,
  Twitter = 1,
  Youtube = 2,
}

export const socialPlatformNames = ['instagram', 'twitter', 'youtube'];

export interface SocialAccount {
  username: string;
  platform: SocialAccountPlatform;
}

export interface Profile extends BaseEntity {
  name: string;
  nickName: string;
  description: string;
  avatarHash: string;
  avatarSignature: string;
  bannerHash: string;
  bannerSignature: string;
  socialAccounts: SocialAccount[];
  profileID: string;
}

export interface Audio extends BaseEntity {
  genre: number[];
  collectionID: string;
  collection: {
    collectionType: string;
    releaseYear: number;
    name: string;
  };
  owners: LoyaltyOwner[];
  releaseYear: string;
  audioID: string;
  duration: number;
  audioSignature: string;
  audioHash: string;
  fit: string[];
}

export interface Subscription {
  subscriptionID: string;
  creatorAddress: string;
  maxMembers: number;
  streams: string;
  price: string;
  consumable: string;
  members: { address: string }[]
}

export interface Playlist extends BaseEntity {
  playlistID: string;
  owners: LoyaltyOwner[];
  releaseYear: string;
  audios: Audio[];
  description: string;
  hash: string;
  meta: string;
}

export interface Account {
  address?: string;
  publicKey?: string;
  name?: string;
}

export interface Transaction {
  id: string;
  moduleCommand: string;
  nonce: string;
  fee: string;
  sender: Account;
}

export interface Block {
  id: string;
  timestamp: number;
  height: number;
  previousBlockID: string;
  generator: Account;
  transactionRoot: string;
  assetRoot: string;
  stateRoot: string;
  maxHeightPrevoted: number;
  numberOfTransactions: number;
  numberOfAssets: number;
  numberOfEvents: number;
  totalForged: number;
  totalBurnt: number;
  networkFee: number;
  signature: string;
  reward: number;
  isFinal: boolean;
}

export type Entity = Transaction | Audio | Playlist | Profile | Collection;

export interface CreateCommandParams extends BaseEntity {
  name: string;
  nickName: string;
  description: string;
  socialAccounts: SocialAccount[];
  avatarHash: Buffer;
  avatarSignature: Buffer;
  bannerHash: Buffer;
  bannerSignature: Buffer;
}

export type EndpointParams = Partial<Record<
  'offset' | 'limit' | 'sort'
  | 'audioID' | 'collectionID' | 'profileID'
  | 'transactionID' | 'blockID',
string>>;

export interface MetaProps {
  total: number;
  offset: number;
  count: number;
}

export interface EndpointResult<T> {
  data: T;
  meta: MetaProps;
}

export interface NetworkStatus {
  data: {
    networkVersion: string;
    chainID: string;
    height: number;
    finalizedHeight: number;
  },
  meta: {
    lastUpdate: number;
    lastBlockHeight: number;
    lastBlockID: string;
  }
}

export type AwaitedEndpointResult<T> = Promise<EndpointResult<T>>;
