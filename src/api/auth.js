var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const API_URL = 'https://moneyfulpublicpolicy.co.kr';
export const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios.post(`${API_URL}/register`, userData);
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
            throw error;
        }
        else {
            throw new Error('register failed');
        }
    }
});
export const login = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios.post(`${API_URL}/login`, userData);
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
            throw error;
        }
        else {
            throw new Error('Login failed');
        }
    }
});
export const getUserProfile = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios.get(`${API_URL}/user`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
            throw error;
        }
        else {
            throw new Error('getUserProfile failed');
        }
    }
});
export const updateProfile = (formData, accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios.patch(`${API_URL}/profile`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', (_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
            throw error;
        }
        else {
            throw new Error('Profile update failed');
        }
    }
});
