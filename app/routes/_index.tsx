import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import {
  getNetworkStatus,
} from '~/models/entity.server';
import type {
  HomeLoaderData,
} from './types';
import NetworkDetails from '~/components/NetworkDetails';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Muzikie explorer' },
    { name: 'description', content: 'Welcome to Muzikie network explorer!' },
  ];
};

export const loader = async () => {
  const networkStatus = await getNetworkStatus();

  return json<HomeLoaderData>({
    networkStatus,
  });
};

export default function Index() {
  const {
    networkStatus,
  } = useLoaderData() as HomeLoaderData;

  return (
    <section className="container m-auto">
      <NetworkDetails stats={networkStatus} />
    </section>
  );
}
