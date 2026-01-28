"use client";

import React from "react";
import { Button } from "@heroui/react";

/**
 * CustomHeroButton
 *
 * Props:
 * @param {string} label - The button text label.
 * @param {React.ReactNode} icon - Optional icon element.
 * @param {"start" | "end"} iconPosition - Where the icon appears relative to text.
 * @param {boolean} isLoading - If true, the button shows a loading state.
 * @param {boolean} isDisabled - If true, the button is disabled.
 * @param {boolean} iconOnly - If true, the button displays only the icon.
 * @param {"primary" | "secondary" | "tertiary" | "ghost" | "danger"} variant - The visual style variant.
 * @param {"sm" | "md" | "lg"} size - Button size.
 * @param {boolean} fullWidth - If true, button takes full container width.
 * @param {function} onPress - Handler called when button is pressed.
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
    return (
        <Button
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            isDisabled={isDisabled || isLoading}
            isPending={isLoading}
            isIconOnly={iconOnly}
            onPress={onPress}
            className="flex items-center justify-center gap-2"
        >
            {/* Icon + Text Rendering */}
            {!iconOnly && icon && iconPosition === "start" && icon}
            {!iconOnly && label}
            {!iconOnly && icon && iconPosition === "end" && icon}
            {iconOnly && icon}
        </Button>
    );
}
