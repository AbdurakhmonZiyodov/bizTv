import React, { useState } from "react";
import { RN } from "../../components/react-native";


const View = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <RN.View>
            <RN.Text>
                <RN.CheckBox
                    onChange={setToggleCheckBox}
                    value={toggleCheckBox}
                />
            </RN.Text>
        </RN.View>
    )
}

export default View
