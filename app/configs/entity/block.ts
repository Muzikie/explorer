import type{ ListHeader } from '~/components/common/List/types';
import type { Block } from '~/configs';
import { truncateString } from '~/helpers/formatters';

const blockHeader = (data: Block): ListHeader => [
	{
		className: "whitespace-nowrap",
		title: 'ID',
		value: data ? `${truncateString(data.id)}` : '',
	},
	{
		className: "text-center truncate",
		title: 'Address',
		value: data ? `${data.generator.address}` : '',
	},
	{
		className: "text-center",
		title: 'Number Of transactions',
		value: data ? data.numberOfTransactions : '',
	},
	{
		className: "text-center",
		title: 'height',
		value: data ? data.height : '',
	}
];

export default blockHeader;
