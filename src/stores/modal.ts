import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ModalStoreType {
    modals:{
        joinModal: boolean;
        joinRoomModal: boolean;
        roomMember: boolean;
        inviteRoomMember: boolean;
        chatModal: boolean;
        createChatRoomModal: boolean;
        writingModal: boolean;
    }
    modalControl: (by: string) => void
  }

  const modalStore = create<ModalStoreType>()(
    devtools((set) => ({
      modals: {
        joinModal: false,
        joinRoomModal: false,
        roomMember: false,
        inviteRoomMember: false,
        chatModal: false,
        createChatRoomModal: false,
        writingModal: false,
      },
      
      modalControl: (by: string) => set((state) => {
        switch (by) {
          case 'join':
            return { modals: { ...state.modals, joinModal: !state.modals.joinModal } };
          case 'joinRoom':
            return { modals: { ...state.modals, joinRoomModal: !state.modals.joinRoomModal } };
          case 'roomMember':
            return { modals: { ...state.modals, roomMember: !state.modals.roomMember } };
          case 'inviteRoomMember':
            return { modals: { ...state.modals, inviteRoomMember: !state.modals.inviteRoomMember } };
          case 'chat':
              return { modals: { ...state.modals, chatModal: !state.modals.chatModal } };
          case 'create':
            return { modals: { ...state.modals, createChatRoomModal: !state.modals.createChatRoomModal } };
          case 'writing':
            return { modals: { ...state.modals, writingModal: !state.modals.writingModal } };
          case 'closeAll':
            return { modals: {
              joinModal: false,
              joinRoomModal: false,
              roomMember: false,
              inviteRoomMember: false,
              chatModal: false,
              createChatRoomModal: false,
              writingModal: false,
            }};
          default:
            return state;
        }
      })
    }))
  );

  export default modalStore;