import Sidebar from '../../components/Layout/Sidebar';
import Content from '../../components/Layout/Content';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
function Dashboard() {
    return (
        <Provider store={store}>
            <div className="flex h-screen">
                <Sidebar />
                <Content />
                <Outlet />
            </div>
        </Provider>
    );
}
export default Dashboard;
