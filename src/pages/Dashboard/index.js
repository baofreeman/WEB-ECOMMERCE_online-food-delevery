import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <Content />
        </div>
    );
}

export default Dashboard;
