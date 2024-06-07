import { Layout } from 'antd';
import s from './layout.module.css';
import CreateTask from '../CreateTask/CreateTask';

const MainLayout = () => {
    const { Header, Content } = Layout;

    return (
        <Layout className={s.layoutStyle}>
            <Header className={s.headerStyle}>
                And design and mobx practice
            </Header>
            <Content className={s.contentStyle}>
                <CreateTask />
            </Content>
        </Layout>
    );
};

export default MainLayout;
