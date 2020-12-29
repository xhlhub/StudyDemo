###hook规则
-只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook
-不要在普通的 JavaScript 函数中调用 Hook
✅ 在 React 的函数组件中调用 Hook
✅ 在自定义 Hook 中调用其他 Hook

###自定义hook
-为了让不同组件复用逻辑
-说白了就是函数里里面可以使用hook的函数
-约定：必须以 “use” 开头，

###注意点
-不同组件中使用相同的 Hook 不会共享 state，互不影响
-一个函数组件内可以多次使用同一个hook(useState()  useEffect())


###问题
useEffect什么时候执行?
dom更新时会触发（首次进入触发&&state改变导致触发render&&props改变导致render）；对应componentDidMount、componentDidUpdate
什么时候执行return?


###一些hooks

<!-- #### useMemo(() => computeExpensiveValue(a, b), [a, b]);
函数是创建函数，但是a，b至少传一个，不传，比较的时候会报错 -->
React.memo
UseMemo 关系？