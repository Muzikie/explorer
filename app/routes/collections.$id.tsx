/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

/* Internal dependencies */
import {
  getCollections,
} from '~/models/entity.server';
import PrettifiedDetails from '~/components/PrettifiedDetails';
import { EntityName, type Collection } from '~/configs/types';
import type { DetailsLoaderProps, DetailsLoaderData } from './types';

export const loader = async ({ params }: DetailsLoaderProps) => {
  invariant(params.id, 'Expected params.id');
  const collection = await getCollections({ params: { collectionID: params.id } });

  if (!collection?.data?.length) {
    throw new Response('Not Found', { status: 404 });
  }

  return json<DetailsLoaderData<Collection>>({
    data: collection.data[0],
    id: params.id,
  });
};

const CollectionScreen = () => {
  const {
    data,
    id,
  } = useLoaderData() as DetailsLoaderData<Collection>;

  return (
    <section className="container m-auto">
      <PrettifiedDetails data={data} id={id} entity={EntityName.collection} />
    </section>
  );
};

export default CollectionScreen;
