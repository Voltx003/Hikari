// src/utils/lazy-load.tsx
import { lazy, Suspense } from 'react';

export const lazyLoad = (
  importFunction: () => Promise<any>,
  fallback: React.ReactNode = <div className="animate-pulse bg-gray-800 rounded-lg w-full h-full" />
) => {
  const Component = lazy(importFunction);
  return (props: any) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};
