# Enter and exit animations

![example](./enter-exit.gif)

## Main task:

Render an array of items that appear as balls that randomly animate in and out.

You can use the `TODO` comments in `index.js` to guide your work.

[Relevant react-spring docs](https://www.react-spring.io/docs/hooks/use-transition)

<details>
  <summary>Hint</summary>

```jsx
<animated.div
  key={key}
  style={{
    ...props,
    backgroundColor: color,
    transform: `translateX(${100 + itemKey * 50}px) translateY(100px)`,
  }}
  className="ball"
>
  {itemKey}
</animated.div>
```

</details>
