Take a look at the code for this very simple react-spring example to get a feel for the library.

## Things to note in the example

1. The call to `useSpring` on line 5 is a common pattern that you'll use a lot, it's worth making sure you understand what it's doing.
2. We don't need to set state anywhere, just call the react-spring provided `set` method on line 12.
3. We need to make sure to use an `animated.div` instead of a plain div.
4. For values like transforms, we need to call the `interpolate` method ourselves on line 19. (Other values can be spread directly in to the `style` prop.)
