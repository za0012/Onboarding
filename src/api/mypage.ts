import {
    UserData,
    CommonResponse,
    UserDataLog,
    LoginResponse,
    TokenResponse,
} from '../types/Sign';
import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

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
