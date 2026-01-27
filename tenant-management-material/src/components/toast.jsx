import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Collapse, IconButton } from "@mui/material";
import { useEffect } from "react";

const iconMap = {
    success: { icon: <DoneAllIcon fontSize="inherit" />, title: "Success" },
    info: { icon: <InfoIcon fontSize="inherit" />, title: "Information" },
    warning: {
        icon: <WarningAmberIcon fontSize="inherit" />,
        title: "Warning",
    },
    error: { icon: <ErrorIcon fontSize="inherit" />, title: "Error" },
};

const positionMap = {
    "top-right": { top: 16, right: 16 },
    "top-left": { top: 16, left: 16 },
    "bottom-right": { bottom: 16, right: 16 },
    "bottom-left": { bottom: 16, left: 16 },
};

/**
 * @param {open} indicates whether the toast bar is open or not, where true is toast bar open and false toast bar is hidden
 * @param {onClose} callback function is called when the toast is called
 * @param {severity = "error"} indicates the severity of the icon on the basis of which, it will dynamically select the icon where default is "error", options are {"success", "error", "info", "warning"}
 * @param {message} what will be displayed in the toast bar
 * @param {position} default is "top-right" and options are {"top-right", "top-left", "bottom-right", "bottom-left"}
 * @param {number} autoHideDuration - time in ms before auto-closing (default: 3000)
 * @returns
 */
export default function ToastBar({
    open,
    onClose,
    severity = "error",
    message = "Unknown error occurred while performing the operation.",
    position = "top-right",
    autoHideDuration = 3000,
}) {
    const config = iconMap[severity] || iconMap.info;
    const pos = positionMap[position] || positionMap["top-right"];

    useEffect(() => {
        if (!open) return;

        const timer = setTimeout(() => {
            onClose?.();
        }, autoHideDuration);

        return () => clearTimeout(timer);
    }, [open, autoHideDuration, onClose]);

    return (
        <Box
            sx={{
                position: "fixed",
                zIndex: 1400,
                ...pos,
            }}
        >
            <Collapse in={open}>
                <Alert
                    severity={severity}
                    icon={config.icon}
                    action={
                        <IconButton
                            color="inherit"
                            size="small"
                            onClick={onClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2, minWidth: 300 }}
                >
                    {/* <AlertTitle>{config.title}</AlertTitle> */}
                    {message}
                </Alert>
            </Collapse>
        </Box>
    );
}
