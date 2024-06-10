import modalStore from './modalStore';
import taskStore from './taskStore';

class RootState {
    taskStore = taskStore;
    modalStore = modalStore;
}

export default new RootState();
