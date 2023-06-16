import React from 'react';

const Empty = ({ emptyTitle }: { emptyTitle: string }) => (
	<div className="w-full relative isolate overflow-hidden bg-rose-50">
		<div className="max-w-7xl px-6 lg:px-8 text-center">
			<h2 className='my-48 text-3xl'>{'No items found.'}</h2>
		</div>
	</div>
);

export default Empty;
