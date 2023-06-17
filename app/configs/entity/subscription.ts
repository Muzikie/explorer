import type{ ListHeader } from '~/components/common/List/types';
import type { Subscription } from '~/configs';
import { truncateString } from '~/helpers/formatters';

const subscriptionConfig = (data: Subscription): ListHeader => (
  {
    gridClassName: 'grid-cols-4',
    items: [
      {
        className: 'whitespace-nowrap text-left ps-6',
        title: 'ID',
        value: truncateString(data?.subscriptionID ?? ''),
      },
      {
        className: 'text-left',
        title: 'Max members',
        value: data?.maxMembers ?? '',
      },
      {
        className: 'text-left',
        title: 'Price',
        value: data?.price ?? '',
      },
      {
        className: 'text-right pe-6',
        title: 'Streams',
        value: data?.streams ?? '',
      }
    ],
  }
);

export default subscriptionConfig;
