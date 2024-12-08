// Imports
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // jest-dom 확장을 포함해야 toBeInTheDocument 사용 가능
import App from '../App';

// Tests
test('Renders main page correctly', async () => {
    // Setup
    render(<App />);
    const buttonCount = await screen.findByRole('button');
    const codeCount = await screen.queryByText(/The count is now:/);

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
    expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
