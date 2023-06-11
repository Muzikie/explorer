/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
/* Internal dependencies */
import {
  getTransactions,
} from '~/models/entity.server';
import { collectionLoaderProps, CollectionLoaderData } from '../../types';



export const loader = async ({ params }: collectionLoaderProps) => {
  invariant(params.id, 'Expected params.id');

  const transactions = await getTraansactions(params.id);

  return json<CollectionLoaderData>({
    transactions,
    profile,
    audios,
    id: params.id,
  });
};

const TransactionsScreen = () => {
  const {
    collection,
    profile,
    audios,
  } = useLoaderData() as CollectionLoaderData;

  return (
    <section className="screen collection">
      <CollectionSummary
        collection={collection}
        profile={profile}
      />
      <List
        items={!audios?.length ? [] : audios}
        className="audioList"
        theme={liskThemes.wide}
        itemTheme={entityThemes.CollectionPage}
      />
    </section>
  );
};

export default TransactionsScreen;
