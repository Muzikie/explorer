import type{ ListHeader } from '~/components/common/List/types';
import type { Subscription } from '~/configs';

const subscriptionHeader = (data: Subscription): ListHeader => [
	{
		className: "font-medium whitespace-nowrap",
		title: 'ID',
		value: data ? data.subscriptionID : '',
	},
	{
		className: "text-center",
		title: 'Max members',
		value: data ? data.maxMembers : '',
	},
	{
		className: "text-center",
		title: 'Price',
		value: data ? data.price : '',
	},
	{
		className: "text-center",
		title: 'Streams',
		value: data ? data.streams : '',
	}
];

export default subscriptionHeader;
