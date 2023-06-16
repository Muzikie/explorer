import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import type { MenuButtonProps } from './types';

const classNames = {
  Open: '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700',
  Close: '-m-2.5 rounded-md p-2.5 text-gray-700'
};

const MenuButton = ({ action, setMobileMenuOpen }: MenuButtonProps) => {
  return (
    <button
      type="button"
      className={classNames[action]}
      onClick={() => setMobileMenuOpen(action === 'Open')}
    >
      <span className="sr-only">{`${action} menu`}</span>
      {
        action === 'Open'
          ? <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          : <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      }
    </button>
  );
};

export default MenuButton;
