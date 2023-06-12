import type { Transaction } from '~/configs';

const TransactionRow = ({
  data,
}: { data: Transaction }) => (
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex gap-x-4">
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{data.id}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{`${data.sender.address}`}</p>
      </div>
    </div>
    <div className="hidden sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{data.fee}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">
        {data.moduleCommand}
      </p>
    </div>
  </li>
);

export default TransactionRow;
