/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

/* Internal dependencies */
import {
  getCollections,
} from '~/models/entity.server';
import type {
  ListLoaderProps,
  CollectionsLoaderData,
} from '../types';
import List from '~/components/common/List';
import collectionDataConfig from '~/configs/entity/collection';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit");
  const offset = url.searchParams.get("offset");
  const collectionID = url.searchParams.get("collectionID");
  const params: Record<string, string | null> = {
    collectionID,
    limit,
    offset
  };
  const collections = await getCollections({ params });

  return json<CollectionsLoaderData>({
    ...collections,
    params,
  });
};

const CollectionsScreen = () => {
  const {
    data,
    meta,
  } = useLoaderData() as CollectionsLoaderData;

  return (
    <section className="relative isolate flex items-center gap-x-6 mx-auto max-w-7xl overflow-hidden px-6 py-2.5 sm:px-3.5">
      <List
        emptyTitle="No collection found."
        itemConfig={collectionDataConfig}
        items={data}
        meta={meta}
      />
    </section>
  );
};

export default CollectionsScreen;
