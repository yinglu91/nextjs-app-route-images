'use client';
 
import React, {ReactNode} from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClientParams = {
    defaultOptions: {
        queries: {
            staleTime: 0*60*1000,
            cacheTime: 0*60*1000,
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
    </QueryClientProvider>
  );
}