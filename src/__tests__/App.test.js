var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
// Imports
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // jest-dom 확장을 포함해야 toBeInTheDocument 사용 가능
import App from '../App.js';
// Tests
test('Renders main page correctly', () => __awaiter(void 0, void 0, void 0, function* () {
    // Setup
    render(_jsx(App, {}));
    const buttonCount = yield screen.findByRole('button');
    const codeCount = yield screen.queryByText(/The count is now:/);
    // Pre Expectations
    expect(buttonCount.innerHTML).toBe('count is 0');
    // Instead of:
    expect(codeCount).toBeNull();
    expect(codeCount).not.toBeInTheDocument(); // 수정된 부분
    // Init
    fireEvent.click(buttonCount);
    fireEvent.click(buttonCount);
    // Post Expectations
    expect(buttonCount.innerHTML).toBe('count is 2');
    expect(yield screen.queryByText(/The count is now:/)).toBeInTheDocument();
}));
