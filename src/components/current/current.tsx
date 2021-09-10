import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store/index';
import fx from '../../money';
import { Loader } from '@components/loader';
import { getCurrents } from '@store/currents/currents.thunk';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const Currents: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => dispatch(getCurrents()), 15000);
    return () => clearInterval(interval)
  }, [dispatch])
  const { currents, source } = useSelector((state: State) => state.currents);
  if (currents) fx.rates = currents;
  return (
    <div className='mt-5'>
      {
        currents
          ? <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.keys(currents).map((name, i) => (
              <li key={name + i} className="col-span-1 flex shadow-sm rounded-md">
                <div
                  className={classNames(
                    'bg-green-400 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
                  )}
                >
                  {name}
                </div>
                <div
                  className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  {name}
                </span>
                    <p
                      className="text-gray-500">{source === 'USD' ? currents[name].toFixed(4) : fx(1).from(source).to(name).toFixed(4)}</p>
                  </div>
                  <div className="flex-shrink-0 pr-2">

                  </div>
                </div>
              </li>
            ))}
          </ul>
          : <Loader/>
      }
    </div>
  );
};