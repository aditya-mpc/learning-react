import { Button } from "@mui/material";

/**
 * @param {button} accepts button name i.e., which will be displayed on the button by-default "Submit"
 * @param {disabled} property to interact with the state of the button i.e., if its disabled or interactive, true or false, by-default false
 * @param {size} property to dynamically handle the size of the button which can be ("medium", "small", "large"), default is medium
 * @param {variant} property to handle what type of button should be displayed with default being contained and options are {"text", "contained", "outlined"}
 * @param {startIcon} optional React element to display at the start of the button
 * @param {endIcon} optional React element to display at the end of the button
 * @param {styles} optional parameter to overwrite CSS
 * @returns
 */
export default function CustomButton({
    button = "Submit",
    disabled = false,
    size = "medium",
    variant = "contained",
    startIcon = null,
    endIcon = null,
    styles = {},
}) {
    if (disabled === "true") disabled = true;
    else disabled = false;

    return (
        <Button
            sx={{ ...styles }}
            variant={variant}
            size={size}
            disabled={disabled}
            startIcon={startIcon || undefined}
            endIcon={endIcon || undefined}
        >
            {button}
        </Button>
    );
}
