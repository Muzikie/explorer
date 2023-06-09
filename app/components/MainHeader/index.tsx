import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import { Link } from '@remix-run/react';

import Logo from '~/components/common/Logo';
import ThemeToggle from '~/components/ThemeToggle';
import MenuButton from './MenuButton';

const menuItems = [
  { name: 'Transactions', to: '/transactions' },
  { name: 'Blocks', to: '/blocks' },
  { name: 'Subscriptions', to: '/subscriptions' },
  { name: 'Collections', to: '/collections' },
  { name: 'Audios', to: '/audios' },
  { name: 'Generators', to: '/generators' },
];

const MainHeader = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 mb-28 container m-auto">
      <nav className="mx-auto flex items-center justify-between pt-14 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MenuButton action="Open" setMobileMenuOpen={setMobileMenuOpen} />
        </div>
        <nav className="hidden lg:flex lg:gap-x-12 items-center">
          {
            menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-xl leading-6 text-main-purple dark:text-main-beige ${location.pathname === item.to ? 'font-semibold' : 'font-normal'}`}
              >
                {item.name}
              </Link>
            ))
          }
          <ThemeToggle />
        </nav>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Muzikie</span>
              <img
                className="h-8 w-auto"
                src="./images/logo.svg"
                alt="Muzikie explorer"
              />
            </Link>
            <MenuButton action="Close" setMobileMenuOpen={setMobileMenuOpen} />
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {
                  menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default MainHeader
