import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ error, ...rest }) => {
    return (
        <div style={{paddingBottom:'2rem'}}>
            {error ? (
                <TextField
                    {...rest}
                    variant="outlined"
                    error
                    helperText={error}
                    size="small"
                    className="input"
                />
            ) : (
                <TextField
                    {...rest}
                    variant="outlined"
                    size="small"
                    className="input"
                />
            )}
        </div>
    );
};

export default Input;
