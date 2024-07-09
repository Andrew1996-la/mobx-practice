import {CloseOutlined} from '@ant-design/icons';
import {Checkbox, CheckboxProps} from 'antd';
import cn from 'classnames';
import {FC} from 'react';
import s from './taskItem.module.css';

type TaskItemProps = {
    isDone: boolean;
    onChange: CheckboxProps['onChange'];
    textTask: string;
    removeTask: (id: string) => void;
    editTask: (text: string, id: string) => void;
    id: string;
};

const TaskItem: FC<TaskItemProps> = ({
                                         isDone,
                                         onChange,
                                         textTask,
                                         removeTask,
                                         editTask,
                                         id,
                                     }) => {
    return (
        <div className={s.taskItem}>
            <Checkbox className={s.check} onChange={onChange}/>
            <span onDoubleClick={() => editTask(textTask, id)} className={cn([s.taskText], {[s.taskDone]: isDone})}>
                {textTask}
            </span>
            <CloseOutlined
                onClick={() => removeTask(id)}
                className={s.delete}
            />
        </div>
    );
};

export default TaskItem;
