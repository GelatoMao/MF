import React from "react";
import Sliders from "./Sliders";
// React 规定异步加载的组件都要用 Suspend 包裹
// react 规定异步加载的组件都要用 suspense 包裹
// suspense 悬停，可以做到在数据回来之前先显示 fallback 的内容，等数据回来之后才显示真正的组件
const RemoteNewsList = React.lazy(() => import("remote/NewsList"));

const A = () => {
  return (
    <div>
      <h1>本地组件Sliders</h1>
      <Sliders />
      <h1>远程组件NewsList</h1>
      <React.Suspense fallback="loading NewsList">
        <RemoteNewsList />
      </React.Suspense>
    </div>
  );
};

export default A;
