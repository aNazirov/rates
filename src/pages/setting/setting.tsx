import React from 'react';
import { Setting } from '@components/setting';

export const SettingPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Настройки</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Replace with your content */}
        <div className="py-4">
          <Setting />
        </div>
        {/* /End replace */}
      </div>
    </>
  );
};