import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="">
          <h1 className="">문제가 발생했어요.</h1>
          <p className="">{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
