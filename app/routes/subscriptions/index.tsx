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
    <section className="relative isolate flex items-center gap-x-6 mx-auto max-w-7xl overflow-hidden px-6 py-2.5 sm:px-3.5">
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
