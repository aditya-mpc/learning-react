"use client";

import React from "react";
import { Button, Tooltip } from "@heroui/react";

/**
 * CustomButtonWithTooltip
 *
 * Props:
 * @param {string} label
 * @param {React.ReactNode} icon
 * @param {"start" | "end"} iconPosition
 * @param {boolean} isLoading
 * @param {boolean} isDisabled
 * @param {boolean} iconOnly
 * @param {"primary" | "secondary" | "tertiary" | "ghost" | "danger"} variant
 * @param {"sm" | "md" | "lg"} size
 * @param {boolean} fullWidth
 * @param {function} onPress
 * @param {React.ReactNode} tooltipContent - content to display in tooltip
 * @param {number} tooltipEnterDelay - milliseconds before tooltip shows
 * @param {number} tooltipExitDelay - milliseconds before tooltip hides
 */
export function CustomButton({
    label,
    icon,
    iconPosition = "start",
    isLoading = false,
    isDisabled = false,
    iconOnly = false,
    variant = "primary",
    size = "md",
    fullWidth = false,
    onPress,
    tooltipContent = null,
    tooltipEnterDelay = 0,
    tooltipExitDelay = 0,
}) {
    const isDanger = variant === "danger" || variant === "danger-soft";

    const variantClassMap = {
        primary: "custom-hero-button--primary",
        secondary: "custom-hero-button--secondary",
        tertiary: "custom-hero-button--tertiary",
        ghost: "custom-hero-button--ghost",
    };

    const buttonElement = (
        <Button
            className={`
                ${!isDanger ? "custom-hero-button" : ""}
                ${!isDanger ? (variantClassMap[variant] ?? "") : ""}
                ${iconOnly ? "custom-icon-only" : ""}
                ${fullWidth ? "w-full" : "inline-flex"}
            `}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            isDisabled={isDisabled || isLoading}
            isPending={isLoading}
            isIconOnly={iconOnly}
            onPress={onPress}
        >
            {!iconOnly && icon && iconPosition === "start" && (
                <span className="button-icon icon-start">{icon}</span>
            )}

            {!iconOnly && <span className="button-label">{label}</span>}

            {!iconOnly && icon && iconPosition === "end" && (
                <span className="button-icon icon-end">{icon}</span>
            )}

            {iconOnly && icon && <span className="button-icon">{icon}</span>}
        </Button>
    );

    // If tooltipContent is provided and button is iconOnly, wrap in Tooltip
    if (iconOnly && tooltipContent) {
        return (
            <Tooltip delay={tooltipEnterDelay}>
                {buttonElement}
                <Tooltip.Content delay={tooltipExitDelay}>
                    {tooltipContent}
                </Tooltip.Content>
            </Tooltip>
        );
    }

    // Otherwise just render the button
    return buttonElement;
}
