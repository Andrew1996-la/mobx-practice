import { CheckboxProps } from 'antd';
import { FC, useState } from 'react';
import TaskItem from './TaskItem';

const TaskItemContainer: FC = () => {
    const [isDone, setIsDone] = useState<boolean>(false);

    const onChange: CheckboxProps['onChange'] = (e) => {
        setIsDone(e.target.checked);
    };

    return <TaskItem isDone={isDone} onChange={onChange} />;
};

export default TaskItemContainer;
