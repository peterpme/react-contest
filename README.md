# Components

ExperimentProvider - global experiment engine

Control and handle all of your experiments at a high level

Variant - individual a/b testing
based on the experiment name you'll figure out if the test should be shown or hidden
# Contest

Super tiny A/B testing platform for your own components.


```es6
<Experiment
  onSelect={variant => {
    console.log(`${variant.name} viewed`)
  }}
  variants={[
    {
      name: 'a',
      chance: 40,
      component: <A />
    },
    {
      name: 'b',
      chance: 30,
      component: <B />
    },
    {
      name: 'c',
      chance: 30,
      component: <C />
    },
  ]}
/>
```
