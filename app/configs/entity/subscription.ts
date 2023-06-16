import type{ ListHeader } from '~/components/common/List/types';
import type { Subscription } from '~/configs';

const subscriptionHeader = (data: Subscription): ListHeader => (
	{
		gridClassName: 'grid-cols-4',
		items: [
			{
				className: 'whitespace-nowrap text-left ps-6',
				title: 'ID',
				value: data?.subscriptionID ?? '',
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

export default subscriptionHeader;
