import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ModalStoreType {
    modals:{
        joinModal: boolean;
        chatModal: boolean;
        createChatRoomModal: boolean;
    }
    modalControl: (by: string) => void
  }

  const modalStore = create<ModalStoreType>()(
    devtools((set) => ({
      modals: {
        joinModal: false,
        chatModal: false,
        createChatRoomModal: false,
      },
      
      modalControl: (by: string) => set((state) => {
        switch (by) {
          case 'join':
            return { modals: { ...state.modals, joinModal: !state.modals.joinModal } };
          case 'chat':
            return { modals: { ...state.modals, chatModal: !state.modals.chatModal } };
          case 'create':
            return { modals: { ...state.modals, createChatRoomModal: !state.modals.createChatRoomModal } };
          default:
            return state;
        }
      })
    }))
  );

  export default modalStore;