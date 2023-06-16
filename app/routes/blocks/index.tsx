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
import blockDataConfig from '~/configs/entity/block';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit");
  const offset = url.searchParams.get("offset");
  const blockID = url.searchParams.get("blockID");
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
    <section className="relative isolate flex items-center gap-x-6 mx-auto max-w-7xl overflow-hidden px-6 py-2.5 sm:px-3.5">
      <List
        emptyTitle="No block found."
        itemConfig={blockDataConfig}
        items={data}
        meta={meta}
      />
    </section>
  );
};

export default BlocksScreen;
