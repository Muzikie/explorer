/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

/* Internal dependencies */
import {
  getSubscriptions,
} from '~/models/entity.server';
import PrettifiedDetails from '~/components/PrettifiedDetails';
import { EntityName, type Subscription } from '~/configs/types';
import type { DetailsLoaderProps, DetailsLoaderData } from './types';

export const loader = async ({ params }: DetailsLoaderProps) => {
  invariant(params.id, 'Expected params.id');
  const subscription = await getSubscriptions({ params: { subscriptionID: params.id } });

  if (!subscription?.data?.length) {
    throw new Response('Not Found', { status: 404 });
  }

  return json<DetailsLoaderData<Subscription>>({
    data: subscription.data[0],
    id: params.id,
  });
};

const SubscriptionScreen = () => {
  const {
    data,
    id,
  } = useLoaderData() as DetailsLoaderData<Subscription>;

  return (
    <section className="container m-auto">
      <PrettifiedDetails data={data} id={id} entity={EntityName.subscription} />
    </section>
  );
};

export default SubscriptionScreen;
