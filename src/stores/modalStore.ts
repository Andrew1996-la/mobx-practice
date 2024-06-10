import { makeAutoObservable } from 'mobx';

class ModalStore {
    isModalOpen = false;

    constructor() {
        makeAutoObservable(this);
    }

    showModal = () => {
        this.isModalOpen = true;
    };

    hideModal = () => {
        this.isModalOpen = false;
    };
}

export default new ModalStore();
