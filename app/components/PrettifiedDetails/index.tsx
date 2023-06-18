import type { Entity, EntityName } from '~/configs';

const PrimaryValue = ({ data }: { data: boolean | string | number | undefined | null }) => {
  let normalizedData = typeof data === 'boolean' ? data.toString() : data;
  if (!normalizedData) {
    normalizedData = '-';
  }
  return <p className="text-lg font-base break-all leading-6 text-dark-purple dark:text-main-beige">{normalizedData}</p>;
};

const ArrayValue = ({ data, key }: { data: any[], key: string }) => {
  const val = data?.length ? data : ['-'];

  return (
    val.map((item, index) => (
      <ParsedParams data={item} key={`arr-${index}-${item}-${key}`} />
    ))
  );
};

const ObjectValue = ({ data, key }: { data: any, key: string }) => (
  <>
    {Object.keys(data).map((innerKey, index) => (
      <div className="flex justify-between gap-x-6 py-5 ps-6" key={`${innerKey}-${key}-${index}`}>
        <div className="min-w-0 flex-auto">
          <p className="mt-1 truncate text-base leading-5 text-gray-500">{innerKey}</p>
          <ParsedParams data={data[innerKey]} key={innerKey} />
        </div>
      </div>
    ))}
  </>
);

const ParsedParams = ({ data, key }: { data: any, key: string }) => {
  if (Array.isArray(data)) {
    return (<ArrayValue data={data} key={key} />);
  }
  if (data && typeof data === 'object') {
    return <ObjectValue data={data} key={key} />
  }
  return <PrimaryValue data={data} key={key} />;
};

const PrettifiedDetails = ({ data, id, entity }: { data: Entity, id: string, entity: EntityName }) => (
  <section className="container">
    <div className="px-8 ">
      <h2 className="text-xl font-base capitalize pt-12 pb-6 text-dark-purple dark:text-main-beige">{`${entity} details`}</h2>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 gap-x-8 mt-8">
        {
          Object.entries(data).map(([key, data]) => (
            <section key={key} className="rounded-3xl border-b border-light-beige rounded-none">
              <div className="flex justify-between gap-x-6 py-5">
                <div className="min-w-0 flex-auto">
                  <p className="mt-1 truncate text-base leading-5 text-gray-500">{key}</p>
                  <ParsedParams data={data} key={key} />
                </div>
              </div>
            </section>
          ))
        }
      </section>
    </div>
  </section>
);

export default PrettifiedDetails;
