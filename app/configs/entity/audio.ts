import type{ ListHeader } from '~/components/common/List/types';
import type { Audio } from '~/configs';

const audioHeader = (data: Audio): ListHeader => (
	{
		gridClassName: 'grid-cols-4',
		items: [
			{
				className: 'whitespace-nowrap text-left ps-6',
				title: 'ID',
				value: data?.audioID ?? '',
			},
			{
				className: 'text-left text-left',
				title: 'Creator account',
				value: data?.creatorAddress ?? '',
			},
			{
				className: 'text-left text-left',
				title: 'Collection name',
				value: data?.collection.name ?? '',
			},
			{
				className: 'text-right text-left pe-6',
				title: 'Audio name',
				value: data?.name ?? '',
			}
		],
	}
);

export default audioHeader;
