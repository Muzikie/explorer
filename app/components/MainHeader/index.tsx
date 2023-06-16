import { useState } from 'react'
import { Dialog } from '@headlessui/react';
import { Link } from '@remix-run/react';

import MenuButton from './MenuButton';

const menuItems = [
  { name: 'Transactions', to: '/transactions' },
  { name: 'Blocks', to: '/blocks' },
  { name: 'Subscriptions', to: '/subscriptions' },
  { name: 'Collections', to: '/collections' },
  { name: 'Audios', to: '/audios' },
];

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-main-beige z-50 mb-28">
      <nav className="mx-auto flex max-w-7xl items-center justify-between pt-14 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Muzikie explorer</span>
            <img className="h-11 w-auto" src="./images/full-logo.svg" alt="Muzikie explorer" />
          </Link>
        </div>
        <div className="flex lg:hidden">
					<MenuButton action="Open" setMobileMenuOpen={setMobileMenuOpen} />
        </div>
        <nav className="hidden lg:flex lg:gap-x-12">
					{
						menuItems.map((item) => (
							<Link key={item.name} to={item.to} className="text-xl font-normal leading-6 text-main-purple">
								{item.name}
							</Link>
						))
					}
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
