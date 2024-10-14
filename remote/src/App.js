import React from 'react';
import NewsList from './NewsList';

const RemoteSliders = React.lazy(()=>import('host/Sliders'));

const App = ()=>{
  return (
    <div>
      <h1>本地组件NewsList</h1>
      <NewsList />
      <h1>远程组件Sliders</h1>
      <React.Suspense fallback="loading RemoteSliders">
        <RemoteSliders/>
      </React.Suspense>
    </div>
  );
}

export default App;