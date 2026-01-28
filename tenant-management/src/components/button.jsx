import React from "react";
import { Button } from "@heroui/react";

/**
 * Props:
 *  - variant: visual style ('primary', 'secondary', 'tertiary', 'outline', 'ghost', 'danger', 'danger-soft' etc.)
 *  - size: size of button ('sm', 'md', 'lg')
 *  - fullWidth: expand to 100% width
 *  - isDisabled: disable button
 *  - isPending: loading state
 *  - className: extra Tailwind classes
 */
export default function CustomButton({
    variant = "primary",
    size = "md",
    fullWidth = false,
    isDisabled = false,
    isPending = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Button
            variant={variant}
            size={size}
            fullWidth={fullWidth}
            isDisabled={isDisabled}
            isPending={isPending}
            className={className}
            {...props}
        >
            {children}
        </Button>
    );
}
