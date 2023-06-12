import type { NetworkStatus } from '~/configs';

const NetworkDetails = ({ stats }: { stats: NetworkStatus }) => {
  const dataSet = [
    { value: stats.data.chainID, title: 'Chain ID' },
    { value: stats.data.height, title: 'Current height' },
    { value: stats.data.networkVersion, title: 'Network version' },
  ];
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {dataSet.map((set) => (
            <div key={set.title} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{set.title}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {set.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
};

export default NetworkDetails;
