import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import CreateTaskContainer from '../CreateTask/CreateTaskContainer';
import TaskListContainer from '../TaskList/TaskListContainer';
import s from './layout.module.css';

const MainLayout = observer(() => {
    const { Header, Content } = Layout;

    return (
        <Layout className={s.layoutStyle}>
            <Header className={s.headerStyle}>
                And design and mobx practice
            </Header>
            <Content className={s.contentStyle}>
                <CreateTaskContainer />
                <TaskListContainer />
            </Content>
        </Layout>
    );
});

export default MainLayout;
