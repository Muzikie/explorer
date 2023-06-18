/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

/* Internal dependencies */
import {
  getBlocks,
} from '~/models/entity.server';
import PrettifiedDetails from '~/components/PrettifiedDetails';
import { EntityName, type Block } from '~/configs/types';
import type { DetailsLoaderProps, DetailsLoaderData } from './types';

export const loader = async ({ params }: DetailsLoaderProps) => {
  invariant(params.id, 'Expected params.id');
  const block = await getBlocks({ params: { blockID: params.id } });

  if (!block?.data?.length) {
    throw new Response('Not Found', { status: 404 });
  }

  return json<DetailsLoaderData<Block>>({
    data: block.data[0],
    id: params.id,
  });
};

const BlockScreen = () => {
  const {
    data,
    id,
  } = useLoaderData() as DetailsLoaderData<Block>;

  return (
    <section className="container m-auto">
      <PrettifiedDetails data={data} id={id} entity={EntityName.block} />
    </section>
  );
};

export default BlockScreen;
