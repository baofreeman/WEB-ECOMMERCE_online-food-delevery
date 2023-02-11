import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../../redux/store';
import { Outlet } from 'react-router-dom';

import Sidebar from '../../utils/Sidebar/Sidebar';
import Content from '../../utils/Content/Content';

function Dashboard() {
    return (
        <ReduxProvider store={store}>
            <div className="flex h-screen">
                <Sidebar />
                <Content />
                <Outlet />
            </div>
        </ReduxProvider>
    );
}
export default Dashboard;
