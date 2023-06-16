import type{ ListHeader } from '~/components/common/List/types';
import type { Block } from '~/configs';
import { truncateString } from '~/helpers/formatters';

const blockHeader = (data: Block): ListHeader => ({
	gridClassName: 'grid-cols-5',
	items: [
		{
			className: 'whitespace-nowrap text-left ps-6',
			title: 'ID',
			value: data ? `${truncateString(data.id)}` : '',
		},
		{
			className: 'text-left truncate col-span-2',
			title: 'Address',
			value: data ? `${data.generator.address}` : '',
		},
		{
			className: 'text-left',
			title: 'Number Of transactions',
			value: data ? data.numberOfTransactions : '',
		},
		{
			className: 'text-right pe-6',
			title: 'height',
			value: data ? data.height : '',
		}
	]
});

export default blockHeader;
