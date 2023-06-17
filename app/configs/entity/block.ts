import type{ ListHeader } from '~/components/common/List/types';
import type { Block } from '~/configs';
import { truncateString } from '~/helpers/formatters';

export const blockTableConfig = (data: Block): ListHeader => ({
  gridClassName: 'grid-cols-5',
  items: [
    {
      className: 'whitespace-nowrap text-left ps-6',
      title: 'ID',
      value: truncateString(data?.id ?? ''),
    },
    {
      className: 'text-left truncate col-span-2',
      title: 'Generator address',
      value: truncateString(data?.generator?.address ?? ''),
    },
    {
      className: 'text-left',
      title: 'Number of transactions',
      value: data?.numberOfTransactions ?? '',
    },
    {
      className: 'text-right pe-6',
      title: 'Height',
      value: data?.height ?? '',
    }
  ]
});

export const blockMiniTableConfig = (data: Block): ListHeader => ({
  gridClassName: 'grid-cols-4',
  items: [
    {
      className: 'whitespace-nowrap text-left ps-6',
      title: 'ID',
      value: truncateString(data?.id ?? ''),
    },
    {
      className: 'text-left truncate col-span-2',
      title: 'Generator address',
      value: truncateString(data?.generator?.address ?? ''),
    },
    {
      className: 'text-right pe-6',
      title: 'Height',
      value: data?.height ?? '',
    }
  ]
});
