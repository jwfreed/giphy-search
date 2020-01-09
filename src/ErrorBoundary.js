import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.hasError) {
      return <Redirect to='/' />;
    }
    if (this.state.hasError) {
      return (
        <h3>
          There was an error. <Link to='/'>Click here</Link> to back to the home
          page or wait five seconds.
        </h3>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
