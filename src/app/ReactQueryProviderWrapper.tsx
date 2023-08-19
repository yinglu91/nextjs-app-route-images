'use client';
 
import React, {ReactNode} from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClientParams = {
    defaultOptions: {
        queries: {
            staleTime: 1*60*1000,
            cacheTime: 1*60*1000,
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    }
}

export const queryClient = new QueryClient(queryClientParams)
 
type Props = {children: ReactNode}

export function QueryClientProviderWrapper({children}: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}