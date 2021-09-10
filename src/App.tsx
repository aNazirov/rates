import React, { useEffect, useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { Sidebar } from '@components/sidebar';
import { Layout } from '@components/layout';
import './store/rootReducer';
import { useDispatch } from 'react-redux';
import { autoSourceSet } from '@store/currents/currents.thunk';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(autoSourceSet())
  }, [dispatch]);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <Layout/>
      </div>
    </div>
  );
};

export default App;