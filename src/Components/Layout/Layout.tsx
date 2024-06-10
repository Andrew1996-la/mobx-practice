import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../stores/storeContext';
import CreateTaskContainer from '../CreateTask/CreateTaskContainer';
import ModalWindow from '../ModalWindow/ModalWindow';
import TaskListContainer from '../TaskList/TaskListContainer';
import s from './layout.module.css';

const MainLayout = observer(() => {
    const { Header, Content } = Layout;
    const { modalStore } = useStore();
    const { isModalOpen, showModal, hideModal } = modalStore;

    return (
        <Layout className={s.layoutStyle}>
            <Header className={s.headerStyle}>
                And design and mobx practice
            </Header>
            <Content className={s.contentStyle}>
                <CreateTaskContainer />
                <TaskListContainer />
                
            </Content>
            <ModalWindow
                showModal={showModal}
                hideModal={hideModal}
                isModalOpen={isModalOpen}
            />
        </Layout>
    );
});

export default MainLayout;
