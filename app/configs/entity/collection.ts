import type{ ListHeader } from '~/components/common/List/types';
import type { Collection } from '~/configs';

export const collectionTableConfig = (data: Collection): ListHeader => (
  {
    gridClassName: 'grid-cols-4',
    items: [
      {
        className: 'whitespace-nowrap tex-left ps-6',
        title: 'ID',
        value: data?.collectionID ?? '',
      },
      {
        className: 'text-left',
        title: 'Creator account',
        value: data?.creatorAddress ?? '',
      },
      {
        className: 'text-left',
        title: 'Collection name',
        value: data?.name ?? '',
      },
      {
        className: 'text-right pe-6',
        title: 'Release year',
        value: data?.releaseYear ?? '',
      }
    ],
  });
