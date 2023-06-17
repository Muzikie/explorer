import type { ListHeaderProps, ListHeaderItem } from './types';

const TableHeader = <T,>({ itemConfig }: ListHeaderProps<T>) => {
  const rowConfig = itemConfig();
  return (
    <header className="bg-dark-purple dark:bg-main-beige text-main-beige dark:text-main-purple text-lg mb-1 font-light rounded-3xl">
      <div className={`grid ${rowConfig.gridClassName} py-5`}>
        {rowConfig.items.map((item: ListHeaderItem) => (
          <div key={item.title} className={`py-3 ${item.className}`}>
            {item.title}
          </div>
        ))}
      </div>
    </header>
  );
}

export default TableHeader;
