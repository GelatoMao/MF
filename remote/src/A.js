import React from "react";
// import NewsList from "./NewsList";
// React 规定异步加载的组件都要用 Suspend 包裹
// react 规定异步加载的组件都要用 suspense 包裹
// suspense 悬停，可以做到在数据回来之前先显示 fallback 的内容，等数据回来之后才显示真正的组件
const RemoteSliders = React.lazy(() => import("host/Sliders"));

const A = () => {
  return (
    <div>
      <h1>本地组件NewsList</h1>
      {/* <NewsList /> */}
      <h1>远程组件Sliders</h1>
      {/* <React.Suspense fallback="loading RemoteSliders">
        <RemoteSliders />
      </React.Suspense> */}
    </div>
  );
};

export default A;
