/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

/* Internal dependencies */
import {
  getTransactions,
} from '~/models/entity.server';
import PrettifiedDetails from '~/components/PrettifiedDetails';
import { EntityName, type Transaction } from '~/configs/types';
import type { DetailsLoaderProps, DetailsLoaderData } from './types';

export const loader = async ({ params }: DetailsLoaderProps) => {
  invariant(params.id, 'Expected params.id');
  const transaction = await getTransactions({ params: { transactionID: params.id } });

  if (!transaction?.data?.length) {
    throw new Response('Not Found', { status: 404 });
  }

  return json<DetailsLoaderData<Transaction>>({
    data: transaction.data[0],
    id: params.id,
  });
};

const TransactionScreen = () => {
  const {
    data,
    id,
  } = useLoaderData() as DetailsLoaderData<Transaction>;

  return (
    <section className="container m-auto">
      <PrettifiedDetails data={data} id={id} entity={EntityName.transaction} />
    </section>
  );
};

export default TransactionScreen;
