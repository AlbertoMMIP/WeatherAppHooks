import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default {
  title: 'Error Boundary',
  component: ErrorBoundary
}

const prop = undefined
const ComponentWithoutError = () => <h2>Sin error</h2>
const ComponentWithError = () => <h2>{prop.name}</h2>
export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <ComponentWithError />
  </ErrorBoundary>
)

export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <ComponentWithoutError />
  </ErrorBoundary>
)
