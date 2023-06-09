/* External dependencies */
import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

/* Internal dependencies */
import {
  getNetworkStatus,
  getTransactions,
  getBlocks,
} from '~/models/entity.server';
import type {
  HomeLoaderData,
} from './types';
import NetworkDetails from '~/components/NetworkDetails';
import List from '~/components/common/List';
import { transactionMiniTableConfig } from '~/configs/entity/transaction';
import { blockMiniTableConfig } from '~/configs/entity/block';
import { EntityName } from '~/configs';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Muzikie explorer' },
    { name: 'description', content: 'Welcome to Muzikie network explorer!' },
  ];
};

export const loader = async () => {
  const networkStatus = await getNetworkStatus();
  const params = {
    params: {
      offset: '0',
      limit: '5',
    }
  };
  const { data: transactions } = await getTransactions(params);
  const { data: blocks } = await getBlocks(params);

  return json<HomeLoaderData>({
    networkStatus,
    transactions,
    blocks,
  });
};

export default function Index() {
  const {
    networkStatus,
    transactions,
    blocks,
  } = useLoaderData() as HomeLoaderData;

  return (
    <section className="container m-auto pb-12">
      <NetworkDetails stats={networkStatus} />
      <section className="grid grid-cols-2 gap-2 gap-x-8 mt-8">
        <section className="bg-light-beige dark:bg-main-purple px-8 rounded-3xl">
          <h2 className="text-xl font-base pt-12 pb-6 text-dark-purple dark:text-main-beige">Latest transactions</h2>
          <List
            entity={EntityName.transaction}
            itemConfig={transactionMiniTableConfig}
            items={transactions}
          />
        </section>
        <section className="bg-light-beige dark:bg-main-purple px-8 rounded-3xl">
          <h2 className="text-xl font-base pt-12 pb-6 text-dark-purple dark:text-main-beige">Latest blocks</h2>
          <List
            entity={EntityName.block}
            itemConfig={blockMiniTableConfig}
            items={blocks}
          />
        </section>
      </section>
    </section>
  );
}
