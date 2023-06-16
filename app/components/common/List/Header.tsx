import type { ListHeaderProps, ListHeaderItem } from './types';

const TableHeader = <T,>({ itemConfig }: ListHeaderProps<T>) => {
	const rowConfig = itemConfig();
	return (
		<header className="bg-fuchsia-950 text-xs text-fuchsia-50 uppercase">
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
