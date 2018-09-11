import Hello from '../components/Hello';
import {decrementEnthusiasm, EnthusiasmAction, incrementEnthusiasm} from '../actions';
import {StoreState} from '../types';
import {connect} from 'react-redux';
import {Dispatch} from "redux";

export function mapStateToProps({enthusiasmLevel, languageName}: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(incrementEnthusiasm()),
        onDecrement: () => dispatch(decrementEnthusiasm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
