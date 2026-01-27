import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/**
 * CustomBox
 *
 * A theme-aware Box component with configurable palette colors
 * and customizable styles.
 *
 * @param {object} styles
 *  sx styles applied to the Box
 *
 * @param {string} primaryMain
 *  Primary main color (default: #007FFF)
 *
 * @param {string} primaryDark
 *  Primary dark color used on hover (default: #282c34)
 *
 */
export default function CustomBox({
    styles = {},
    primaryMain = "#007FFF",
    primaryDark = "#282c34",
}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: primaryMain,
                dark: primaryDark,
            },
        },
    });

    const defaultStyles = {
        p: 2,
        minWidth: 500,
        minHeight: 200,
        border: "1px dashed gray",
        borderRadius: 1,
        bgcolor: "primary.main",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        "&:hover": {
            boxShadow: (theme) => theme.shadows[8],
            transform: "translateY(-2px)",
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ ...defaultStyles, ...styles }} />
        </ThemeProvider>
    );
}
