import * as React from 'react';
import {getExclamationMarks} from "../helper";
import './Hello.css';

export interface IHelloProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

class Hello extends React.Component<IHelloProps, object> {
    public render() {
        const {name, enthusiasmLevel = 1, onDecrement, onIncrement} = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        );
    }
}

export default Hello;
