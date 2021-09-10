import React, { FormEvent, useState } from 'react';
import { sourceSet } from '@store/currents/currents.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { currencies } from '@_data/keys';
import { State } from '@store/index';

export const Setting: React.FC = () => {
  const startSource = useSelector((state: State) => state.currents.source)
  const [source, setSource] = useState(startSource);
  const dispatch = useDispatch();
  const submit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('source', source)
    dispatch(sourceSet(source))
    alert('Базовая валюта успешно изменена')
  };
  return (
    <form className='mt-5' onSubmit={submit}>
      <h3>Базовая валюта</h3>
      <div className='flex mt-2'>
        <select
          value={source}
          onChange={e => setSource(e.target.value)}
          id="location"
          name="location"
          className="mt-1 block w-52 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {
            currencies.map(currence => {
              return (
                <option value={currence}>{currence}</option>
              );
            })
          }
        </select>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Поменять
          </button>
        </div>
      </div>
    </form>
  );
};