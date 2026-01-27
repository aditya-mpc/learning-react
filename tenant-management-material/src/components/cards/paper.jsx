import { Paper } from "@mui/material";

/**
 * ElevatedPaper
 *
 * A fully customizable, theme-aware Paper component that adapts
 * automatically to light and dark modes and provides proper
 * surface contrast without using Box.
 *
 * @param {React.ReactNode} children
 * @param {number} elevation
 * @param {number} hoverElevation
 * @param {boolean} disabled
 * @param {object} paperSx
 * @param {object} backdropSx
 * @param {function} onClick
 *
 * @returns {JSX.Element}
 */
export default function ElevatedPaper({
    children,
    elevation = 3,
    hoverElevation = 0,
    disabled = false,
    paperSx = {},
    backdropSx = {},
    onClick,
}) {
    return (
        <Paper
            elevation={0}
            square={false}
            sx={{
                p: 2,
                bgcolor: "background.default",
                transition: "background-color 0.3s ease",
                ...backdropSx,
            }}
        >
            <Paper
                elevation={elevation}
                onClick={!disabled ? onClick : undefined}
                sx={{
                    p: 3,
                    bgcolor: "background.paper",
                    cursor: onClick && !disabled ? "pointer" : "default",
                    opacity: disabled ? 0.6 : 1,
                    pointerEvents: disabled ? "none" : "auto",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    "&:hover":
                        !disabled && hoverElevation
                            ? {
                                  boxShadow: (theme) =>
                                      theme.shadows[hoverElevation],
                                  transform: "translateY(-2px)",
                              }
                            : undefined,
                    ...paperSx,
                }}
            >
                {children}
            </Paper>
        </Paper>
    );
}
