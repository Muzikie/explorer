import type{ ListHeader } from '~/components/common/List/types';
import type { Audio } from '~/configs';

const audioHeader = (data: Audio): ListHeader => [
	{
		className: "whitespace-nowrap",
		title: 'audioID',
		value: data ? data.audioID : '',
	},
	{
		className: "text-center",
		title: 'creatorAddress',
		value: data ? data.creatorAddress : '',
	},
	{
		className: "text-center",
		title: 'Collection name',
		value: data ? data.collection.name : '',
	},
	{
		className: "text-center",
		title: 'name',
		value: data ? data.name : '',
	}
];

export default audioHeader;
