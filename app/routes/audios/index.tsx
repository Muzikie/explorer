/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

/* Internal dependencies */
import {
  getAudios,
} from '~/models/entity.server';
import type {
  ListLoaderProps,
  AudiosLoaderData,
} from '../types';
import List from '~/components/common/List';
import { audioTableConfig } from '~/configs/entity/audio';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const offset = url.searchParams.get('offset');
  const audioID = url.searchParams.get('audioID');
  const params: Record<string, string | null> = {
    audioID,
    limit,
    offset
  };
  const audios = await getAudios({ params });

  return json<AudiosLoaderData>({
    ...audios,
    params,
  });
};

const AudiosScreen = () => {
  const {
    data,
    meta,
  } = useLoaderData() as AudiosLoaderData;

  return (
    <section className="container m-auto">
      <List
        emptyTitle="No audio found."
        itemConfig={audioTableConfig}
        items={data}
        meta={meta}
      />
    </section>
  );
};

export default AudiosScreen;
