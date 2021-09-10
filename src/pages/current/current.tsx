import React, { useEffect } from 'react';
import { Currents } from '@components/current';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrents } from '@store/currents/currents.thunk';
import { State } from '@store/index';

export const CurrentPage = () => {
  const dispatch = useDispatch();
  const source = useSelector((state: State) => state.currents.source);
  useEffect(() => {
    dispatch(getCurrents())
  }, [dispatch]);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Курс: {source}</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <Currents/>
        {/* /End replace */}
      </div>
    </>
  );
};