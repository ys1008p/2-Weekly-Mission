import { Component, PropsWithChildren } from "react";

interface State {
	hasError: boolean;
	error?: Error;
}
export class ErrorBoundary extends Component<PropsWithChildren, State> {
	constructor(props: PropsWithChildren) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	render() {
		if (this.state.hasError && this.state.error) {
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
