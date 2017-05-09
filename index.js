export function selectWinner(weights) {
  let i, probability = 0;
  const ar = [];
  const chance = Math.random();

  for (i = 0; i < weights.length - 1; i++) {
    probability += weights[i] / 100.0;
    ar[i] = probability;
  }

  for (i = 0; i < ar.length && chance >= ar[i]; i++);
  return i;
}

const Experiment = ({
  onSelect,
  variants,
}) => {
  const chances = variants.map(v => v.chance);
  const index = selectWinner(chances);
  const Variant = variants[index].component;
  onSelect(variants[index]);
  return Variant;
};

export default Experiment
