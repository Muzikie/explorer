/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

/* Internal dependencies */
import {
  getBlocks,
} from '~/models/entity.server';
import type {
  ListLoaderProps,
  BlocksLoaderData,
} from '../types';
import List from '~/components/common/List';
import { blockTableConfig } from '~/configs/entity/block';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const offset = url.searchParams.get('offset');
  const blockID = url.searchParams.get('blockID');
  const params: Record<string, string | null> = {
    blockID,
    limit,
    offset
  };
  const blocks = await getBlocks({ params });

  return json<BlocksLoaderData>({
    ...blocks,
    params,
  });
};

const BlocksScreen = () => {
  const {
    data,
    meta,
  } = useLoaderData() as BlocksLoaderData;

  return (
    <section className="container m-auto">
      <List
        emptyTitle="No block found."
        itemConfig={blockTableConfig}
        items={data}
        meta={meta}
      />
    </section>
  );
};

export default BlocksScreen;
