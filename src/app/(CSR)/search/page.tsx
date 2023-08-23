'use client';

import { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export const metadata = {
  title: 'Search - Image Gallery',
};

// localhost:3000/search
export default function Page() {
  const [queryTerm, setQueryTerm] = useState('');

  const updateQueryTerm = (query: string) => {
    setQueryTerm(query);
  };

  return (
    <>
      <SearchForm updateQueryTerm={updateQueryTerm} />
      {queryTerm && <SearchResult searchTerm={queryTerm} />}
    </>
  );
}
