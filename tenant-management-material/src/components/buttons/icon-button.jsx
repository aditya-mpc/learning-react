import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomTooltip from "../tooltip";

/**
 * @param {ariaLabel} aria-label for accessibility
 * @param {icon} React element for the icon
 * @param {iconSize} "small" | "medium" | "large"
 * @param {color} CSS color value
 * @param {tooltip} text shown in tooltip
 * @param {tooltipPlacement} tooltip position
 * @param {tooltipDelay} delay before showing tooltip (ms)
 * @param {tooltipTrigger} "hover" | "click"
 * @param {tooltipTransition} "zoom" | "fade"
 */
export default function IconButtons({
    ariaLabel = "delete",
    icon = <DeleteIcon />,
    iconSize = "large",
    color = "#1089da",
    tooltip = "Delete",
    tooltipPlacement = "top",
    tooltipDelay = 300,
    tooltipTrigger = "hover",
    tooltipTransition = "zoom",
    tooltipLeaveDelay = 200,
}) {
    return (
        <CustomTooltip
            title={tooltip}
            placement={tooltipPlacement}
            delay={tooltipDelay}
            trigger={tooltipTrigger}
            transition={tooltipTransition}
            leaveDelay={tooltipLeaveDelay}
        >
            {/* Button is wrapped within span tag so that tooltips would be visible even in disabled state */}
            <span>
                <IconButton
                    aria-label={ariaLabel}
                    size={iconSize}
                    sx={{ color }}
                >
                    {icon}
                </IconButton>
            </span>
        </CustomTooltip>
    );
}
