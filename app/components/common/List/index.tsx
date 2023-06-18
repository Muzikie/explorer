import type { ListProps } from './types';
import Pagination from './Pagination';
import Empty from './Empty';
import Header from './Header';
import Row from './Row';

const List = ({
  entity,
  itemConfig,
  items,
  meta,
}: ListProps<any>) => {
  if (items.length === 0) {
    return (<Empty entity={entity} />)
  }

  return (
    <section>
      <div className="w-full text-sm text-left">
        <Header itemConfig={itemConfig} />
        <main>
          {items.map((item, index) => {
            return (<Row data={item} entity={entity} itemConfig={itemConfig} key={index} />);
          })}
        </main>
      </div>
      {
        meta && (
          <Pagination meta={meta} />
        )
      }
    </section >
  );
};

export default List;
