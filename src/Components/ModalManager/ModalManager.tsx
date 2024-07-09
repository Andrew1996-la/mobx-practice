import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { Modal } from 'antd';

type ModalManagerProps = {
    children: React.ReactNode;
}

type ModalState = {
    visible: boolean;
    title: string;
    content: ReactNode | null;
    onCancel: (() => void) | null;
    onOk: (() => void) | null;
}

type ModalContextType = {
    showModal: (modal: Omit<ModalState, 'visible'>) => void;
    closeModal: () => void;
} | null;

const ModalContext = createContext<ModalContextType>(null);

export const useModal = () => {
    return useContext(ModalContext);
};

const ModalManager: FC<ModalManagerProps> = ({ children }) => {
    const [modal, setModal] = useState<ModalState>({
        visible: false,
        title: '',
        content: null,
        onOk: null,
        onCancel: null,
    });

    const showModal = ({ title, content, onOk, onCancel }: Omit<ModalState, 'visible'>) => {
        setModal({
            visible: true,
            title,
            content,
            onOk,
            onCancel,
        });
    };

    const closeModal = (): void => {
        setModal((prevState) => ({
            ...prevState,
            visible: false,
        }));
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            {children}
            <Modal
                open={modal.visible}
                onOk={() => {
                    if (modal.onOk) modal.onOk;
                }}
                onCancel={() => {
                    if (modal.onCancel) modal.onCancel;
                }}
            >{modal.content}</Modal>
        </ModalContext.Provider>
    );
};

export default ModalManager;