import React from 'react';
import './ShowQuote.css';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentQuote: "", class: "d-none" };
    }

    handlerClick = () => {
        this.setState({ currentQuote: this.props.quote, class: "" })
    }

    render() {
        return (
            <>
                <div className={this.state.class} id='quoteDiv'>
                    {this.state.currentQuote}
                </div>
                <button onClick={this.handlerClick}>Show Quote</button>
            </>
        );
    }
}

Counter.defaultProps = {
    quote: "Quote is undefined!"
}