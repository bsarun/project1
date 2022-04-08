import * as React from 'react';
import {
    SelectField,
} from '@aws-amplify/ui-react';

const propOptions = (props) => {
    return (
        props.options && props.options.map((option, index) => {
            return (
                <option selected={index === props.selected}>{option}</option>
            )
        }))
        ;
}
const Select = (props) => {
    return (
        <SelectField label={props.label}>{propOptions(props)}</SelectField>
    );
}

export default Select;