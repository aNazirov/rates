import React, { FormEvent, useState } from 'react';
import { convertService } from '@services/currents.service';
import { currentSet } from '@store/currents/currents.thunk';
import { useDispatch } from 'react-redux';

export const Convert: React.FC = () => {
  const [action, setAction] = useState('')
  const dispatch = useDispatch()
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const act = action.toUpperCase().split(' ')
    convertService(`${act[1]}_${act[3]}`)
      .then(currency => dispatch(currentSet(currency * +act[0])))
  }
  return (
    <form className='flex mt-5' onSubmit={submit}>
      <div className="border border-gray-300 bg-white rounded-md shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
        <input
          value={action}
          onChange={(e) => setAction(e.target.value)}
          type="text"
          name="name"
          id="name"
          className="block px-3 py-2 w-96 rounded-md h-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
          placeholder="50 USD in RUB"
        />
      </div>
      <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        >
          Конвертировать
        </button>
      </div>
    </form>
  )
}