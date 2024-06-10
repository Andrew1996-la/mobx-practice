import { useStore } from '../../stores/storeContext';
import TaskList from './TaskList';

const TaskListContainer = () => {
    const { taskStore } = useStore();
    const taskList = taskStore.getTodoAction();
    return <TaskList taskList={taskList} />;
};

export default TaskListContainer;
