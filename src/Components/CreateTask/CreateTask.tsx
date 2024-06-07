import { EditOutlined, SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import s from './createTask.module.css';

const CreateTask = () => {
    return (
        <Input
            size='large'
            placeholder='create task'
            prefix={<EditOutlined />}
            suffix={<SendOutlined className={s.sendIcon} />}
            className={s.input}
        />
    );
};

export default CreateTask;
