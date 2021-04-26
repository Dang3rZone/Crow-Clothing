import React from 'react';
import './error-boundary.styles';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrorer) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imgUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>Sorry, Our Dog Ate this Page </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
