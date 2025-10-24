// src/context/AppProviders.jsx
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Correct import for TanStack Query v4/v5

import { DarkModeProvider } from './DarkModeContext.jsx';
import { PageProvider } from './PageContext.jsx';
import { StatusProvider } from './StatusContext.jsx';

// const clientId = '445166244631-rop7pue78i8b9ia4l2qgg0g6rmn074sh.apps.googleusercontent.com';
// const queryClient = new QueryClient();
export function AppProviders({ children }) {
  return (
    <DarkModeProvider>
      <StatusProvider>
        <PageProvider> {/* Add FinanceProvider here */}
          {children}
        </PageProvider>
      </StatusProvider>
    </DarkModeProvider>
  );
}