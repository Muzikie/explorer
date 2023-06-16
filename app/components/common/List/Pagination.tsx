import { useLocation } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from '@remix-run/react';

import { PAGE_SIZE } from '~/configs';
import type { MetaProps } from '~/configs';
import type {
  GeneratePageNumbers,
  DirectionButtonProps,
  NumberButtonProps,
} from './types';

const generatePageNumbers: GeneratePageNumbers = (totalPages, currentPage) => {
  const pageNumbers = [];

  // Add the first three elements starting from the current page
  for (let i = currentPage; i <= currentPage + 2; i++) {
    if (i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  // Add the last four elements ending in the total pages
  for (let i = totalPages - 3; i <= totalPages; i++) {
    if (i > 0 && !pageNumbers.includes(i)) {
      pageNumbers.push(i);
    }
  }

  return pageNumbers.sort();
};

const DirectionButton = ({ total, current, direction }: DirectionButtonProps) => {
  const location = useLocation();
  const toPage = direction === 'next' ? Math.min(current, total - 1) : Math.max(current - 2, 0);
  const to = `${location.pathname}?offset=${toPage * PAGE_SIZE}&limit=${PAGE_SIZE}`;
  const borderClass = direction === 'next' ? 'rounded-r-md' : 'rounded-l-md';
  const className = `relative inline-flex items-center ${borderClass} px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:pale-beige focus:z-20 focus:outline-offset-0`;
  const Icon = direction === 'next' ? ChevronRightIcon : ChevronLeftIcon;

  return (
    <Link
      to={to}
      className={className}
    >
      <span className="sr-only">Next</span>
      <Icon className="h-5 w-5" aria-hidden="true" />
    </Link>
  );
};

const NumberButton = ({ page, current }: NumberButtonProps) => {
  const location = useLocation();
  const activeColors = 'bg-main-purple text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';
  const inactiveColors = 'text-main-purple ring-1 ring-inset ring-gray-300 hover:pale-beige focus:z-20 focus:outline-offset-0';
  const to = `${location.pathname}?offset=${(page - 1) * PAGE_SIZE}&limit=${PAGE_SIZE}`;

  return (
    <Link
      to={to}
      aria-current="page"
      className={`relative z-10 inline-flex items-center px-4 py-2 text-sm focus:z-20 font-semibold ${page === current ? activeColors : inactiveColors}`}
    >
      {page}
    </Link>
  );
};

const Ellipsis = () => (
  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
		...
  </span>
);


const Pagination = ({
  meta
}: { meta: MetaProps }) => {
  const totalPages = Math.ceil(meta.total / PAGE_SIZE);
  const currentPage = Math.ceil((meta.offset + 1) / meta.count);
  const pageList = generatePageNumbers(totalPages, currentPage);

  return (
    <nav className="flex items-center justify-between border-t py-8 rounded-3xl border-gray-200 bg-light-beige py-3">
      <div className="flex flex-1 items-center justify-center sm:justify-between">
        <div className="hidden sm:flex pl-6">
          <p className="text-base text-main-purple">
            Showing <span className="font-medium">{meta.offset}</span> to <span className="font-medium">{meta.offset + meta.count}</span> of{' '}
            <span className="font-medium">{meta.count}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm pr-6" aria-label="Pagination">
            <DirectionButton current={currentPage} total={totalPages} direction="prev" />
            {
              pageList.map((page, index) => {
                if (index < 3) {
                  return (<NumberButton key={index} current={currentPage} page={page} />);
                }
                if (pageList.length === 7 && index === 3) {
                  return (<Ellipsis key={index} />);
                }
                return (<NumberButton key={index} current={currentPage} page={page} />);
              })
            }
            <DirectionButton current={currentPage} total={totalPages} direction="next" />
          </nav>
        </div>
      </div>
    </nav>
  )
};

export default Pagination;
