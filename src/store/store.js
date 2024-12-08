import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import userImage from '../assets/userDefaultImg.png';
const userStore = create(persist((set) => ({
    user: {
        accessToken: '',
        avatar: userImage,
        nickname: '',
        success: false,
        userId: '',
    },
    logInUser: (data) => set(() => ({
        user: {
            accessToken: data.accessToken,
            avatar: data.avatar,
            nickname: data.nickname,
            success: data.success,
            userId: data.userId,
        },
    })),
    logOutUser: () => {
        set({
            user: {
                accessToken: '',
                avatar: null,
                nickname: '',
                success: false,
                userId: '',
            },
        });
    },
    changeProfile: (data) => set((state) => ({
        user: Object.assign(Object.assign({}, state.user), { nickname: data.nickname, avatar: data.avatar }),
    })),
}), {
    name: 'user',
}));
export default userStore;
