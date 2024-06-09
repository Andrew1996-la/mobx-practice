import { Checkbox, CheckboxProps } from 'antd';
import cn from 'classnames';
import { FC } from 'react';
import s from './taskItem.module.css';

type TaskItemProps = {
    isDone: boolean;
    onChange: CheckboxProps['onChange'];
};

const TaskItem: FC<TaskItemProps> = ({ isDone, onChange }) => {
    return (
        <div className={s.taskItem}>
            <Checkbox className={s.check} onChange={onChange} />
            <span className={cn([s.taskText], { [s.taskDone]: isDone })}>
                example this is task
            </span>
        </div>
    );
};

export default TaskItem;
