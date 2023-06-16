import type{ ListHeader } from '~/components/common/List/types';
import type { Transaction } from '~/configs';

const transactionHeader = (data: Transaction): ListHeader => [
	{
		className: "font-medium whitespace-nowrap",
		title: 'ID',
		value: data ? data.id : '',
	},
	{
		className: "text-center",
		title: 'Address',
		value: data ? `${data.sender.address}` : '',
	},
	{
		className: "text-center",
		title: 'Fee',
		value: data ? data.fee : '',
	},
	{
		className: "text-center",
		title: 'Module:command',
		value: data ? data.moduleCommand : '',
	}
];

export default transactionHeader;
