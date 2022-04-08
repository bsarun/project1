import * as React from 'react';
import {
    TextField,
} from '@aws-amplify/ui-react';


const Input = (props) => {

    return (
        <TextField
            className={props.className}
            direction={props.column}
            hasError={props.hasError}
            inputMode={props.inputMode}
            isDisabled={props.isDisabled}
            isReadOnly={props.isReadOnly}
            isRequired={props.isRequired}
            size={props.size}
            labelHidden={props.labelHidden}
            fontSize={props.fontSize}
            name={props.name}
            placeholder={props.placeholder}
            errorMessage={props.errorMessage}
            type={props.inputMode}
            wrap={props.nowrap}
            onChange={(e) => props.onChange(e, e.currentTarget.value, props.name)}
            onInput={(e) => console.info('input fired:', e.currentTarget.value)}
            onCopy={(e) => console.info('onCopy fired:', e.currentTarget.value)}
            onCut={(e) => console.info('onCut fired:', e.currentTarget.value)}
            onPaste={(e) => console.info('onPaste fired:', e.currentTarget.value)}
            onSelect={(e) =>
                console.info(
                    'onSelect fired:',
                    e.currentTarget.value.substring(
                        e.currentTarget.selectionStart,
                        e.currentTarget.selectionEnd
                    )
                )
            }
        />
    )
}

export default Input;