import React from 'react'
import { Convert } from '@components/convert';
import { useSelector } from 'react-redux';
import { State } from '@store/index';

export const ConvertPage = () => {
  const current = useSelector((state: State) => state.currents.current)
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Конвертер</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                    <Convert />
                  <div className="border w-52 mt-2 border-gray-300 bg-white rounded-md shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <input
                      value={current}
                      readOnly={true}
                      type="text"
                      name="name"
                      id="name"
                      className="block px-3 py-2 w-full rounded-md h-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="50 USD in RUB"
                    />
                  </div>
                </div>
                {/* /End replace */}
            </div>
        </>
    )
}