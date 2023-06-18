/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

/* Internal dependencies */
import {
  getAudios,
} from '~/models/entity.server';
import PrettifiedDetails from '~/components/PrettifiedDetails';
import { EntityName, type Audio } from '~/configs/types';
import type { DetailsLoaderProps, DetailsLoaderData } from './types';

export const loader = async ({ params }: DetailsLoaderProps) => {
  invariant(params.id, 'Expected params.id');
  const audio = await getAudios({ params: { audioID: params.id } });

  if (!audio?.data?.length) {
    throw new Response('Not Found', { status: 404 });
  }

  return json<DetailsLoaderData<Audio>>({
    data: audio.data[0],
    id: params.id,
  });
};

const AudioScreen = () => {
  const {
    data,
    id,
  } = useLoaderData() as DetailsLoaderData<Audio>;

  return (
    <section className="container m-auto">
      <PrettifiedDetails data={data} id={id} entity={EntityName.audio} />
    </section>
  );
};

export default AudioScreen;
