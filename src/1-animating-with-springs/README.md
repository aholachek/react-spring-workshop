# 1: Animating with springs

## Main Task:

Every time you click the grey container element, animate the ball to have a random combination of color, scale, x and y variables.

## Follow up tasks:

- Make the spring have a `wobbly` config instead of the default one.
- You should console.log `"done!"` whenever the spring is at rest
- The `x` and `y` variables should be random percentages of the height and width of the `container` div rather than static values.

Not sure where to get started? Check out the react-spring docs, specifically these pages:

1. https://www.react-spring.io/docs/hooks/api
2. https://www.react-spring.io/docs/hooks/use-spring

<details>
  <summary>Hint</summary>

```jsx
<animated.div style={{
     transform: interpolate(
              [scale, x, y],
              (scale, x, y) => `scale(${scale}) translate(${x}px,${y}px)`
            ),
}}>
```

</details>
