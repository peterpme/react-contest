# React Contest

May the best component win!
Super tiny A/B testing platform for your own components.

```es6
<Experiment
  name="showAdOnDetailPage"
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
