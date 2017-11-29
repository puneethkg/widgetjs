import * as React from 'react';

import ActiveButton from '../ActiveButton';

interface AppHeader extends React.StatelessComponent<{}> { }

const Component: AppHeader = ({ }) => (
    <div className="app-header">
        <div className="pull-left">
            <label className="txtSize30">Mobility - Edit</label>
        </div>
        <div className="pull-right">
            <ActiveButton />
            <ActiveButton />
        </div>
    </div>
);
Component.displayName = "AppHeader";

export default Component;