import type{ ListHeader } from '~/components/common/List/types';
import type { Collection } from '~/configs';

const collectionHeader = (data: Collection): ListHeader => [
	{
		className: "whitespace-nowrap",
		title: 'collectionID',
		value: data ? data.collectionID : '',
	},
	{
		className: "text-center",
		title: 'creatorAddress',
		value: data ? data.creatorAddress : '',
	},
	{
		className: "text-center",
		title: 'Name',
		value: data ? data.name : '',
	},
	{
		className: "text-center",
		title: 'name',
		value: data ? data.releaseYear : '',
	}
];


export default collectionHeader;

