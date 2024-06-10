import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { TaskType, taskType } from '../../stores/types';
import TaskItemContainer from '../TaskItem/TaskItemContainer';

type TaskListProps = {
    taskList: TaskType;
};

const TaskList: FC<TaskListProps> = observer(({ taskList }) => {
    return (
        <div>
            <h2>{taskList.length ? 'Task list' : "You don't have any task"}</h2>
            {taskList.map((task: taskType) => {
                return (
                    <TaskItemContainer
                        key={task.id}
                        id={task.id}
                        isDone={task.isDone}
                        textTask={task.text}
                    />
                );
            })}
        </div>
    );
});

export default TaskList;
