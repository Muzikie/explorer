import type { ListProps } from './types';
import Pagination from './Pagination';

const List = ({
  items,
  meta,
  rowComponent
}: ListProps<any>) => {
  const Row = rowComponent;
  return (
    <section className="container divide-y divide-gray-100">
      <ul>
        {items.map((item, index) => (<Row data={item} key={index} />))}
      </ul>
      <Pagination meta={meta} />
    </section>
  );
};

export default List;
