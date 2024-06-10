import { EditOutlined, SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FC } from 'react';
import s from './createTask.module.css';

type CreateTaskProps = {
    inputValue: string;
    addNewTask: (text: string) => void;
    setInputValue: (text: string) => void;
};

const CreateTask: FC<CreateTaskProps> = ({
    inputValue,
    addNewTask,
    setInputValue,
}) => {
    return (
        <Input
            size='large'
            placeholder='create task'
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            prefix={<EditOutlined />}
            suffix={
                <SendOutlined
                    className={s.sendIcon}
                    onClick={() => addNewTask(inputValue)}
                />
            }
            onPressEnter={() => addNewTask(inputValue)}
            className={s.input}
        />
    );
};

export default CreateTask;
