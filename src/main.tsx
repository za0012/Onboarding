import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import * as Sentry from '@sentry/react';

const queryClient = new QueryClient();

Sentry.init({
    dsn: 'https://840b2991bdbb8d006b02582c4238a3c9@o4508431345909760.ingest.us.sentry.io/4508431354560512',
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

<Sentry.ErrorBoundary
    fallback={<p>에러가 발생하였습니다. 잠시 후 다시 시도해주세요.</p>}
>
    <App />
</Sentry.ErrorBoundary>;

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
);
