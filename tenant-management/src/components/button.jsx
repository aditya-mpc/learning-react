"use client";

import React from "react";
import { Button } from "@heroui/react";

/**
 * CustomButton
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
}) {
    /**
     * Mapping button variants to our own CSS class which lets us define styles specifically for each type.
     */
    const variantClass = {
        primary: "btn-variant-primary",
        secondary: "btn-variant-secondary",
        tertiary: "btn-variant-tertiary",
        ghost: "btn-variant-ghost",
        danger: "btn-variant-danger",
    }[variant];

    return (
        <Button
            className={`
        custom-hero-button
        ${variantClass}
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
}
