import type{ ListHeader } from '~/components/common/List/types';
import { formatTime } from '~/helpers/formatters';
import type { Generator } from '~/configs';

export const generatorTableConfig = (data: Generator): ListHeader => (
  {
    gridClassName: 'grid-cols-5',
    items: [
      {
        className: 'text-left pl-6',
        title: 'Name',
        value: data?.name ?? '',
      },
      {
        className: 'text-left col-span-2',
        title: 'Address',
        value: data?.address ?? '',
      },
      {
        className: 'text-left',
        title: 'Next turn',
        value: formatTime(data?.nextAllocatedTime) ?? '',
      },
      {
        className: 'text-right pr-6',
        title: 'Status',
        value: data?.status ?? '',
      },
    ],
  }
);
