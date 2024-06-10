import { CheckboxProps } from 'antd';
import { FC } from 'react';
import { useStore } from '../../stores/storeContext';
import TaskItem from './TaskItem';

type TaskItemContainerProps = {
    textTask: string;
    isDone: boolean;
    id: string;
};

const TaskItemContainer: FC<TaskItemContainerProps> = ({
    textTask,
    isDone,
    id,
}) => {
    const { taskStore, modalStore } = useStore();


    const removeTask = (id: string) => {
        taskStore.removeTodoAction(id);
    };

    const onChange: CheckboxProps['onChange'] = (e) => {
        taskStore.checkTodoAction(id, e.target.checked);
    };

    const editTask = () => {
        modalStore.showModal();
    }

    return (
        <TaskItem
            isDone={isDone}
            onChange={onChange}
            textTask={textTask}
            removeTask={removeTask}
            editTask={editTask}
            id={id}
        />
    );
};

export default TaskItemContainer;
