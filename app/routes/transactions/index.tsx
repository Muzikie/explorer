/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

/* Internal dependencies */
import {
  getTransactions,
} from '~/models/entity.server';
import type {
  ListLoaderProps,
  TransactionsLoaderData,
} from '../types';
import List from '~/components/common/List';
import transactionDataConfig from '~/configs/entity/transaction';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const offset = url.searchParams.get('offset');
  const transactionID = url.searchParams.get('transactionID');
  const params: Record<string, string | null> = {
    transactionID,
    limit,
    offset
  };
  const transactions = await getTransactions({ params });

  return json<TransactionsLoaderData>({
    ...transactions,
    params,
  });
};

const TransactionsScreen = () => {
  const {
    data,
    meta,
  } = useLoaderData() as TransactionsLoaderData;

  return (
    <section className="relative isolate flex items-center gap-x-6 mx-auto max-w-7xl overflow-hidden px-6 py-2.5 sm:px-3.5">
      <List
        emptyTitle="No transactions found."
        itemConfig={transactionDataConfig}
        items={data}
        meta={meta}
      />
    </section>
  );
};

export default TransactionsScreen;
