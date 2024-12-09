export type UserData = {
    id: string;
    password: string;
    nickname: string;
};

export type CommonResponse = {
    message: string;
    success: boolean;
};

export type UserDataLog = {
    id: string;
    password: string;
};

export type LoginResponse = {
    accessToken: string;
    avatar: string | null;
    nickname: string;
    success: boolean;
    userId: string;
    message?: string;
    refreshToken: string;
};

export type TokenResponse = {
    id: string;
    nickname: string;
    avatar: string | null;
    success: boolean;
};
