import type{ ListHeader } from '~/components/common/List/types';
import type { Audio } from '~/configs';

export const audioTableConfig = (data: Audio): ListHeader => (
  {
    gridClassName: 'grid-cols-4',
    items: [
      {
        className: 'whitespace-nowrap text-left pl-6',
        title: 'ID',
        value: data?.audioID ?? '',
      },
      {
        className: 'text-left',
        title: 'Creator account',
        value: data?.creatorAddress ?? '',
      },
      {
        className: 'text-left',
        title: 'Collection name',
        value: data?.collection.name ?? '',
      },
      {
        className: 'text-right pe-6',
        title: 'Audio name',
        value: data?.name ?? '',
      }
    ],
  }
);
