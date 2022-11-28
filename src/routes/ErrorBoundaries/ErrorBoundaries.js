import React from 'react'

/**
 * Note
 * Error boundaries do not catch errors for:
 * - Event handlers (https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers)
 * - Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
 * - Server side rendering
 * - Errors thrown in the error boundary itself (rather than its children)
 */

export class ErrorBoundaries extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorInfo: error }; // this is similar to => this.setState({ hasError: true })
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo, this.state.errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // this could return the children or anything else: this.props.children;
    return ( 
      <div>
        This is the main returned component with no error yet.
      </div>
    ) 
  }
}
