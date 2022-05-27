import React from 'react';
import CheckBox from '@react-native-community/checkbox';

interface IProps {
    onChange: (newValue: boolean) => void;
    value: boolean;
    style?: any;
}


const CheckBoxComponent = ({ onChange, value, style }: IProps) => {

    return (
        <CheckBox
            disabled={false}
            value={value}
            onValueChange={onChange}
            style={style}
        />
    )
}

export default CheckBoxComponent