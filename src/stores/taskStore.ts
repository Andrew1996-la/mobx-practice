import { makeAutoObservable } from 'mobx';
import { TaskType, taskType } from './types';

class TaskStore {
    todos: TaskType = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodoAction(text: string) {
        this.todos.push({
            id: Math.random().toString(16).slice(2),
            text,
            isDone: false,
        });
    }

    getTodoAction() {
        return this.todos;
    }

    editTodoAction(id: string, newText: string) {
        const todo = this.todos.find((todo: taskType) => todo.id === id);
        if (todo) {
            todo.text = newText;
        }
    }

    checkTodoAction(id: string, isDone: boolean) {
        const todo = this.todos.find((todo: taskType) => todo.id === id);
        if (todo) {
            todo.isDone = isDone;
        }
    }

    removeTodoAction(id: string) {
        this.todos = this.todos.filter((todo: taskType) => {
            return todo.id !== id;
        });
    }
}

export default new TaskStore();
