import { useState } from 'react';
import { useStore } from '../../stores/storeContext';
import CreateTask from './CreateTask';

const CreateTaskContainer = () => {
    const { taskStore } = useStore();
    const [inputValue, setInputValue] = useState<string>('');

    const addNewTask = (text: string) => {
        if (text.length === 0) return;
        taskStore.addTodoAction(text);
        setInputValue('');
    };

    return (
        <CreateTask
            inputValue={inputValue}
            addNewTask={addNewTask}
            setInputValue={setInputValue}
        />
    );
};

export default CreateTaskContainer;
