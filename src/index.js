import Cookies from 'js-cookie';
import React from 'react';

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

function getExperiment (props) {
    const { onSelect, variants } = props;
    const chances = variants.map(v => v.chance);
    const index = selectWinner(chances);
    const Variant = variants[index].component;
    onSelect(variants[index]);
    return Variant;
}

function getVariationName (variants) {
    const chances = variants.map(v => v.chance);
    const index = selectWinner(chances);
    const variationName = variants[index].name;
    return index;
}

function getExperiment (name) {
    return Cookies.get(`experiment_${name}`);
}

function setExperiment (name, index) {
    return Cookies.set(`experiment_${name}`, index);
}

function removeExperiment (name) {
    return Cookies.remove(`experiment_${name}`)
}

class Experiment extends React.Component {
    componentWillMount () {
        const { name, variants } = this.props;
        const exp = getExperiment(name);

        if (exp) {
            this.variation = exp;
        } else {
            this.variation = getVariationName(variants);
            setExperiment(name, this.variation);
        }

        this.Component = variants[this.variation].component;
    }

    render () {
        const Component = this.Component;
        return Component;
    }
}

export default Experiment
