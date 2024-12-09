export type UserDataStore = {
    user: {
        accessToken: string;
        avatar: string | null;
        nickname: string;
        success: boolean;
        userId: string;
    };
    logInUser: (data: {
        accessToken: string;
        avatar: string | null;
        nickname: string;
        success: boolean;
        userId: string;
    }) => void;
    logOutUser: () => void;
    changeProfile: (data: { nickname: string; avatar: string | null }) => void;
};
