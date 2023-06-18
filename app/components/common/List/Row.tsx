import { Link } from '@remix-run/react';

import type { Entity } from '~/configs';
import { getEntityId } from '~/helpers/helpers';
import type { RowProps, ColumnProps } from './types';

const Column = ({ data, className }: ColumnProps) => (
  <div className={`py-4 text-main-purple dark:text-main-beige ${className}`}>
    {data}
  </div>
);

const Row = <T,>({ data, itemConfig, entity }: RowProps<T>) => {
  const configs = itemConfig(data);
  const id = getEntityId(data as Entity, entity);
  return (
    <Link
      to={`/${entity}s/${id}`}
      className={`grid ${configs.gridClassName} gap-4 justify-between gap-x-6 py-5 text-base font-light hover:font-semibold mb-1 rounded-3xl cursor-pointer`}
    >
      {
        configs.items.map((config, index) => (
          <Column
            data={config.value}
            key={index}
            className={config.className}
          />
        ))
      }
    </Link>
  );
};

export default Row;
