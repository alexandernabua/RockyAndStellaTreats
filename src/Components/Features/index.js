import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Dinner of the Week</h1>
      <p>Fill with Dinner items</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature;