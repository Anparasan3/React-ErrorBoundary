import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  render() {
    if (this.state.hasError) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
