import { Modal } from 'antd';
import Input from 'antd/es/input/Input';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

type ModalWindowProps = {
    isModalOpen: boolean;
    showModal: () => void;
    hideModal: () => void;
};

const ModalWindow: FC<ModalWindowProps> = observer(
    ({ isModalOpen, hideModal }) => {
        return (
            <Modal
                title='Редактировать задачу'
                open={isModalOpen}
                onOk={hideModal}
                onCancel={hideModal}
            >
                <Input value={}/>
            </Modal>
        );
    }
);

export default ModalWindow;
