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
    const isDanger = variant === "danger" || variant === "danger-soft";

    const variantClassMap = {
        primary: "custom-hero-button--primary",
        secondary: "custom-hero-button--secondary",
        tertiary: "custom-hero-button--tertiary",
        ghost: "custom-hero-button--ghost",
    };

    return (
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
}
