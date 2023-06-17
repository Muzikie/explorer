/* External dependencies */
import React from 'react';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

/* Internal dependencies */
import {
  getSubscriptions,
} from '~/models/entity.server';
import type {
  ListLoaderProps,
  SubscriptionsLoaderData,
} from '../types';
import List from '~/components/common/List';
import subscriptionDataConfig from '~/configs/entity/subscription';

export const loader = async ({ request }: ListLoaderProps) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const offset = url.searchParams.get('offset');
  const subscriptionID = url.searchParams.get('subscriptionID');
  const params: Record<string, string | null> = {
    subscriptionID,
    limit,
    offset
  };
  const subscriptions = await getSubscriptions({ params });

  return json<SubscriptionsLoaderData>({
    ...subscriptions,
    params,
  });
};

const SubscriptionsScreen = () => {
  const {
    data,
    meta,
  } = useLoaderData() as SubscriptionsLoaderData;

  return (
    <section className="container m-auto">
      <List
        emptyTitle="No subscription found."
        itemConfig={subscriptionDataConfig}
        items={data}
        meta={meta}
      />
    </section>
  );
};

export default SubscriptionsScreen;
