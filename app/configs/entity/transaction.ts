import type{ ListHeader } from '~/components/common/List/types';
import type { Transaction } from '~/configs';

const transactionHeader = (data: Transaction): ListHeader => (
	{
		gridClassName: 'grid-cols-4',
		items: [
			{
				className: 'whitespace-nowrap text-left ps-2',
				title: 'ID',
				value: data ? data.id : '',
			},
			{
				className: 'text-left',
				title: 'Address',
				value: data ? `${data.sender.address}` : '',
			},
			{
				className: 'text-left',
				title: 'Fee',
				value: data ? data.fee : '',
			},
			{
				className: 'text-right pe-6',
				title: 'Module:command',
				value: data ? data.moduleCommand : '',
			}
		],
	}
);

export default transactionHeader;
