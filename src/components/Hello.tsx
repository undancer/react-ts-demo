import * as React from 'react';
import {getExclamationMarks} from "../helper";
import './Hello.css';

export interface IHelloProps {
    name: string;
    enthusiasmLevel?: number;
}

interface IHelloState {
    currentEnthusiasm: number;
}

class Hello extends React.Component<IHelloProps, IHelloState> {
    constructor(props: IHelloProps) {
        super(props);
        this.state = {currentEnthusiasm: props.enthusiasmLevel || 1};
    }

    onDecrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm - 1)
    };
    onIncrement = () => {
        this.updateEnthusiasm(this.state.currentEnthusiasm + 1)
    };

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({currentEnthusiasm});
    }

    public render() {
        const {name} = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }
}

export default Hello;
