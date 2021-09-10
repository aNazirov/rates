import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { ConvertPage } from '@pages/convert';
import { CurrentPage } from '@pages/current';
import { SettingPage } from '@pages/setting';

export const Layout: React.FC = () => {
    return (
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                <div className="py-6">
                    <Switch>
                        <Route path='/' component={ConvertPage} exact/>
                        <Route path='/currents' component={CurrentPage} />
                        <Route path='/settings' component={SettingPage} />
                    </Switch>
                </div>
        </main>
    )
}
