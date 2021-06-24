### React Router

- BrowserRouter as Router
- Switch
- Route exact path
- Link to
- useRouteMatch,
- useParams

```javascript
window.history.back();
window.history.go(-1);

window.history.forward();
window.history.go(1);

window.history.length();

history.pushState();
history.replaceState();
```

```javascript
let stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
history.replaceState(stateObj, "page 2", "bar.html");
```

- 读取当前历史记录项的状态对象 state

```javascript
let currentState = history.state;
```

#### 路由匹配

```javascript
path = "/order/:direction(asc|desc)";
("/order/asc"); // matched
("/order/desc"); // matched
("/order/foo"); // not matched
```
