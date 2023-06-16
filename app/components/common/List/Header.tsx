import type { ListHeaderProps, ListHeaderItem } from './types';

const TableHeader = <T,>({ itemConfig }: ListHeaderProps<T>) => {
	const rowConfig = itemConfig();
	return (
		<header className="bg-dark-purple text-lg text-fuchsia-50 mb-1 font-light rounded-3xl">
			<div className="flex justify-between gap-x-6 py-5">
				{rowConfig.map((item: ListHeaderItem) => (
					<div key={item.title} className={`px-6 py-3 ${item.className}`}>
						{item.title}
					</div>
				))}
			</div>
		</header>
	);
}

export default TableHeader;
