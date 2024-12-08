import {
    UserData,
    CommonResponse,
    UserDataLog,
    LoginResponse,
    TokenResponse,
} from '../types/Sign';
import { UpdateResponse } from '../types/MypageType';
import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

export const register = async (userData: UserData): Promise<CommonResponse> => {
    try {
        const response = await axios.post<CommonResponse>(
            `${API_URL}/register`,
            userData
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data);
            throw error;
        } else {
            throw new Error('register failed');
        }
    }
};

export const login = async (userData: UserDataLog): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(
            `${API_URL}/login`,
            userData
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data);
            throw error;
        } else {
            throw new Error('Login failed');
        }
    }
};

export const getUserProfile = async (
    accessToken: string
): Promise<TokenResponse> => {
    try {
        const response = await axios.get<TokenResponse>(`${API_URL}/user`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data);
            throw error;
        } else {
            throw new Error('getUserProfile failed');
        }
    }
};

export const updateProfile = async (
    formData: FormData,
    accessToken: string
): Promise<UpdateResponse> => {
    try {
        const response = await axios.patch<UpdateResponse>(
            `${API_URL}/profile`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', error.response?.data);
            throw error;
        } else {
            throw new Error('Profile update failed');
        }
    }
};
