import taskStore from './taskStore';

class RootState {
    taskStore = taskStore;
}

export default new RootState();
