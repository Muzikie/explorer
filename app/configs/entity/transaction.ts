import type{ ListHeader } from '~/components/common/List/types';
import type { Transaction } from '~/configs';
import { truncateString, convertToken } from '~/helpers/formatters';

const transactionHeader = (data: Transaction): ListHeader => (
  {
    gridClassName: 'grid-cols-4',
    items: [
      {
        className: 'whitespace-nowrap text-left ps-6',
        title: 'ID',
        value: truncateString(data?.id ?? ''),
      },
      {
        className: 'text-left',
        title: 'Sender address',
        value: truncateString(data?.sender?.address ?? ''),
      },
      {
        className: 'text-left',
        title: 'Fee',
        value: convertToken(data?.fee ?? '', 'MZK'),
      },
      {
        className: 'text-right pe-6',
        title: 'Module:command',
        value: data?.moduleCommand ?? '',
      }
    ],
  }
);

export default transactionHeader;
