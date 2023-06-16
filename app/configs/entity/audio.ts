import type{ ListHeader } from '~/components/common/List/types';
import type { Audio } from '~/configs';

const audioHeader = (data: Audio): ListHeader => [
	{
		className: "font-medium text-gray-500 whitespace-nowrap",
		title: 'audioID',
		value: data ? data.audioID : '',
	},
	{
		className: "text-center text-gray-500",
		title: 'creatorAddress',
		value: data ? data.creatorAddress : '',
	},
	{
		className: "text-center text-gray-500",
		title: 'Collection name',
		value: data ? data.collection.name : '',
	},
	{
		className: "text-center text-gray-500",
		title: 'name',
		value: data ? data.name : '',
	}
];

export default audioHeader;
