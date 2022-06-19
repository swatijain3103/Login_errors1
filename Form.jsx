// components m reacts wagera import nh krte
// ye file input components ke liye h 

import "./Form.css";
import { useState } from "react";

const Form = (props) => {
    const [focused,setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocused = () => {
        setFocused(true);
    }

    // by using props we are taking our placeholder values from app.js file
    return(
        <div>
            <label>{label}</label>
            <input {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocused} focused={focused.toString()} />
            {/* to string will convert the boolean to string */}
            <span>{errorMessage}</span>
        </div>
    );
};

export default Form;

// email explanation
// ^               // start of line
// [a-zA-Z]{2,}    // will except a name with at least two characters
// \s              // will look for white space between name and surname
// [a-zA-Z]{1,}    // needs at least 1 Character
// \'?-?           // possibility of **'** or **-** for double barreled and hyphenated surnames
// [a-zA-Z]{2,}    // will except a name with at least two characters
// \s?             // possibility of another whitespace
// ([a-zA-Z]{1,})? // possibility of a second surname

// password explanation
// ^ represents starting character of the string.
// (?=.*[0-9]) represents a digit must occur at least once.
// (?=.*[a-z]) represents a lower case alphabet must occur at least once.
// (?=.*[A-Z]) represents an upper case alphabet that must occur at least once.
// (?=.*[@#$%^&-+=()] represents a special character that must occur at least once.
// (?=\\S+$) white spaces don’t allowed in the entire string.
// .{8, 20} represents at least 8 characters and at most 20 characters.
// $ represents the end of the string.
