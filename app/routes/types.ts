import type {
  Collection,
  Audio,
  Profile,
  Playlist
} from '~/configs';


export interface CollectionLoaderData {
  collection: Awaited<Collection>;
  profile: Awaited<Profile>;
  audios: Awaited<Audio[]>;
  id: number;
}

export interface collectionLoaderProps {
  params: {
    id: number;
  };
}

export interface LoaderBaseProps {
  request: Request;
}

export interface PlaylistLoaderData {
  playlist: Awaited<Playlist>;
  audios: Awaited<Audio[]>;
  id: number;
}

export interface playlistLoaderParams {
  params: {
    id: number;
  };
}

export interface ProfileLoaderData {
  profile: Awaited<Profile>;
  collections: Awaited<Collection[]>;
  audios: Awaited<Audio[]>;
  id: string;
}

export interface profileLoaderProps {
  params: {
    id: string;
  };
  request: Request;
}


export interface DiscographyLoaderData {
  collections: Awaited<Collection[]>;
  audios: Awaited<Audio[]>;
}

export interface DiscographyProps {
  audios: Audio[];
  collections: Collection[];
}
