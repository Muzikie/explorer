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
import AudioRow from '~/components/entity/AudioRow';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit");
  const offset = url.searchParams.get("offset");
  const audioID = url.searchParams.get("audioID");
  const params: Record<string, string|null> = {
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
    <section className="relative isolate flex items-center gap-x-6 mx-auto max-w-7xl overflow-hidden px-6 py-2.5 sm:px-3.5">
      <List
        items={data}
        meta={meta}
        rowComponent={AudioRow}
      />
    </section>
  );
};

export default AudiosScreen;
