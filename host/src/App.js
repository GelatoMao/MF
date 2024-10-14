import React from 'react';
import Sliders from './Sliders';

const RemoteNewsList = React.lazy(()=>import('remote/NewsList'));

const App = ()=>{
  return (
    <div>
      <h1>本地组件Sliders</h1>
      <Sliders />
      <h1>远程组件NewsList</h1>
      <React.Suspense fallback="loading NewsList">
        <RemoteNewsList/>
      </React.Suspense>
    </div>
  );
}

export default App;