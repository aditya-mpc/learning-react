import { useState } from "react";
import { IconButton, Tooltip, tooltipClasses } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";

const transitions = {
    fade: Fade,
    zoom: Zoom,
};

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

/**
 * @param {title} tooltip text
 * @param {chidren} icon will be passed along with the function
 * @param {placement} tooltip placement, available options are "top-start", "top", "top-end", "left-start", "left", "left-end", "right-start", "right-end", "right", "bottom-start", "bottom", "bottom-end" with the default being top
 * @param {delay} delay in ms before tooltip opens (default 300ms)
 * @param {trigger} "hover" | "click"
 * @param {transition} "fade" | "zoom"
 * @param {leaveDelay} time to close the display of tooltip in ms (default 200ms)
 */
export default function CustomTooltip({
    title = "Delete",
    children,
    placement = "top",
    delay = 300,
    trigger = "hover",
    transition = "zoom",
    leaveDelay = 200,
}) {
    const [open, setOpen] = useState(false);

    const TransitionComponent = transitions[transition];
    const tooltipProps = {
        title,
        leaveDelay,
        placement,
        slots: TransitionComponent ? { transition: TransitionComponent } : {},
        slotProps: TransitionComponent ? { transition: { timeout: 400 } } : {},
    };

    // Hover-based tooltip (simple)
    if (trigger === "hover") {
        return (
            <LightTooltip
                {...tooltipProps}
                arrow
                describeChild
                enterDelay={delay}
                disableInteractive
            >
                <span>{children}</span>
            </LightTooltip>
        );
    }

    // Click-based tooltip (controlled)
    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div>
                <LightTooltip
                    {...tooltipProps}
                    arrow
                    open={open}
                    disableInteractive
                    describeChild
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                >
                    <IconButton onClick={() => setOpen(true)}>
                        {icon}
                    </IconButton>
                </LightTooltip>
            </div>
        </ClickAwayListener>
    );
}
