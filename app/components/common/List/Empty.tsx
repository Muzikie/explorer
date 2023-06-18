import type { EmptyProps } from './types';

const Empty = ({ entity }: EmptyProps) => (
  <div className="w-full relative isolate overflow-hidden bg-light-beige dark:bg-main-purple rounded-3xl">
    <div className="px-6 lg:px-8 text-center">
      <h2 className='my-48 text-3xl text-dark-purple dark:text-main-beige'>{`No ${ entity || 'item' }s found.`}</h2>
    </div>
  </div>
);

export default Empty;
