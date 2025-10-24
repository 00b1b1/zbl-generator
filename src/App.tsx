import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppLayout from '@layouts/AppLayout';
import { CanvasPage, HomePage, LibraryPage, NotFoundPage } from '@pages';

export function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-200">
          Loading zebra label workspace...
        </div>
      }
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="canvas" element={<CanvasPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
