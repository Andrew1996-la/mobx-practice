import { Layout } from 'antd';
import CreateTask from '../CreateTask/CreateTask';
import s from './layout.module.css';
import TaskItemContainer from '../TaskItem/TaskItemContainer';

const MainLayout = () => {
    const { Header, Content } = Layout;

    return (
        <Layout className={s.layoutStyle}>
            <Header className={s.headerStyle}>
                And design and mobx practice
            </Header>
            <Content className={s.contentStyle}>
                <CreateTask />
                <TaskItemContainer />
            </Content>
        </Layout>
    );
};

export default MainLayout;
