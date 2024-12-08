import { useState } from 'react';
import './App.css';
import Router from './shared/Router';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* jset 테스트 코드
            <h1>Vite + React1</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                {count > 0 ? (
                    <p>
                        <code>The count is now: {count}</code>
                    </p>
                ) : null}
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}
            <Router/>
        </>
    );
}

export default App;
