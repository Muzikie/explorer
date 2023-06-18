import { Link } from '@remix-run/react';

import type { Entity } from '~/configs';
import { getEntityId } from '~/helpers/helpers';
import type { RowProps, ColumnProps, RowWrapper } from './types';

const Column = ({ data, className }: ColumnProps) => (
  <div className={`py-4 text-main-purple dark:text-main-beige ${className}`}>
    {data}
  </div>
);

const Wrapper = ({ id, children, gridClassName, entity }: RowWrapper) => {
  const className = `grid ${gridClassName} gap-4 justify-between gap-x-6 py-5 text-base font-light mb-1 rounded-3xl`;
  if (id) {
    return (
      <Link
        to={`/${entity}s/${id}`}
        className={`${className} hover:font-semibold cursor-pointer`}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
};

const Row = <T,>({ data, itemConfig, entity }: RowProps<T>) => {
  const configs = itemConfig(data);
  const id = getEntityId(data as Entity, entity);
  return (
    <Wrapper
      id={id}
      gridClassName={configs.gridClassName}
      entity={entity}
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
    </Wrapper>
  );
};

export default Row;
