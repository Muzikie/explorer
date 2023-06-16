import type{ ListHeader } from '~/components/common/List/types';
import type { Collection } from '~/configs';

const collectionHeader = (data: Collection): ListHeader => (
	{
		gridClassName: 'grid-cols-4',
		items: [
			{
				className: 'whitespace-nowrap tex-left ps-6',
				title: 'collectionID',
				value: data ? data.collectionID : '',
			},
			{
				className: 'text-left',
				title: 'creatorAddress',
				value: data ? data.creatorAddress : '',
			},
			{
				className: 'text-left',
				title: 'Name',
				value: data ? data.name : '',
			},
			{
				className: 'text-right pe-6',
				title: 'name',
				value: data ? data.releaseYear : '',
			}
		],
});


export default collectionHeader;

