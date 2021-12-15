import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({hasError: true});
        // You can also log the error to an error reporting service
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div className="d-flex justify-content-center align-items-center bg-white" style={{height: '100vh'}}>
                <h1> متاسفانه خطایی رخ داده است.</h1>
            </div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;