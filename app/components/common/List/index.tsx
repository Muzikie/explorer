import type { ListProps } from './types';
import Pagination from './Pagination';
import Empty from './Empty';
import Header from './Header';
import Row from './Row';

const List = ({
	itemConfig,
	emptyTitle,
	items,
	meta,
}: ListProps<any>) => {
	if (items.length === 0) {
		return (<Empty emptyTitle={emptyTitle} />)
	}

	return (
		<section className="container divide-y divide-gray-100">
			<div className="w-full text-sm text-left text-fuchsia-50">
				<Header itemConfig={itemConfig} />
				<main className='bg-pink-300'>
					{items.map((item, index) => {
						return (<Row data={item} itemConfig={itemConfig} key={index} />);
					})}
				</main>
			</div>
			<Pagination meta={meta} />
		</section >
	);
};

export default List;
