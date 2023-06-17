import { XMarkIcon } from '@heroicons/react/20/solid';

import type { BannerProps } from './types';

const Banner = ({
  dismiss, title, subtitle, content,
}: BannerProps) => {
  return (
    <div className="relative isolate flex items-center gap-x-6 mx-auto overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      {
        content || (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">{title}</strong>
              <span>{subtitle}</span>
            </p>
          </div>
        )
      }
      <div className="flex flex-1 justify-end">
        {
          dismiss ? (
            <button
              onClick={dismiss}
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          ) : null
        }
      </div>
    </div>
  )
}

export default Banner;
