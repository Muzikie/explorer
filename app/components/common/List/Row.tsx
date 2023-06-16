import type { RowProps, ColumnProps } from './types';

const Column = ({ data, className }: ColumnProps) => (
	<div className={`px-6 py-4 text-gray-500 ${className}`}>
		{data}
	</div>
);

const Row = <T,>({ data, itemConfig }: RowProps<T>) => {
	const configs = itemConfig(data);
	return (
		<div className="flex justify-between gap-x-6 py-5 border-b-2 bg-rose-50 border-b hover:bg-rose-100">
			{
				configs.map((config, index) => (
					<Column
						data={config.value}
						key={index}
						className={config.className}
					/>
				))
			}
		</div>
	);
};

export default Row;
