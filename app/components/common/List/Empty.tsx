import type { EmptyProps } from './types';

const Empty = ({ emptyTitle }: EmptyProps) => (
	<div className="w-full relative isolate overflow-hidden bg-light-beige rounded-3xl">
		<div className="max-w-7xl px-6 lg:px-8 text-center">
			<h2 className='my-48 text-3xl'>{ emptyTitle || 'No items found.'}</h2>
		</div>
	</div>
);

export default Empty;
