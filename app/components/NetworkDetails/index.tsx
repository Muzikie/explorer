import type { NetworkStatus } from '~/configs';

const NetworkDetails = ({ stats }: { stats: NetworkStatus }) => {
  const dataSet = [
    { value: stats.data.chainID, title: 'Chain ID' },
    { value: stats.data.height, title: 'Current height' },
    { value: stats.data.networkVersion, title: 'Network version' },
  ];
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl pt-24 pb-14 sm:pt-22 sm:pb-32 bg-light-beige dark:bg-main-purple rounded-3xl">
        <section className="grid gap-x-8 gap-y-16 grid-cols-1 lg:grid-cols-3 text-center">
          <header className="col-span-1 lg:col-span-3 pb-10">
            <h4 className="text-xl text-main-purple dark:text-main-beige">Network information</h4>
          </header>
          {dataSet.map((set) => (
            <main key={set.title} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <h3 className="text-base text-main-purple dark:text-main-beige">{set.title}</h3>
              <h4 className="font-semibold text-main-purple dark:text-main-beige sm:text-5xl">
                {set.value}
              </h4>
            </main>
          ))}
        </section>
      </div>
    </div>
  )
};

export default NetworkDetails;
