import { useState } from "react";
import "./App.css";
import ToastBar from "./components/toast";
import CustomButton from "./components/buttons/button";
import ElevatedPaper from "./components/cards/paper";
import SendIcon from "@mui/icons-material/Send";
import IconButtons from "./components/buttons/icon-button";
import Tooltip from "./components/tooltip";
import CustomCard from "./components/cards/card";
import CustomBox from "./components/box";
import { Avatar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";

function App() {
    const [count, setCount] = useState(0);
    const [toast, setToast] = useState({
        open: false,
        severity: "info",
        message: "",
    });

    // Single place to control toast behavior
    const showToast = (severity, message) => {
        setToast({
            open: true,
            severity,
            message,
        });
    };

    const handleClick = () => {
        try {
            const isSuccess = Math.random() > 0.4;

            if (!isSuccess) {
                throw new Error("Failed to increase count");
            }

            setCount((c) => c + 1);
            showToast("success", "Count increased");
        } catch (err) {
            showToast("error", err.message || "Something went wrong");
        }
    };

    return (
        <>
            <div className="mx-auto max-w-large items-center gap-x-4 rounded-xl justify-content bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 space-between">
                <div className="mb-5">
                    <button onClick={handleClick}>count is {count}</button>
                </div>
                <div className="mb-5">
                    <CustomButton
                        button="Delete"
                        disabled="false"
                        size="large"
                        endIcon={<SendIcon />}
                    />
                </div>
                <div className="mb-5">
                    <IconButtons />
                </div>
                <div className="mb-5">
                    <CustomCard disabled="true" />
                </div>
                <div className="mb-5">
                    <CustomCard
                        title="Main Invoice Summary"
                        subTitle="January 2026"
                        avatar={<Avatar sx={{ bgcolor: "black" }}>A</Avatar>}
                        content="Total payable amount is ₹1200."
                        actions={[
                            {
                                icon: <FavoriteIcon />,
                                tooltip: "Delete Invoice",
                                onClick: () => console.log("Delete clicked"),
                            },
                            {
                                icon: <MoreVertIcon />,
                                tooltip: "Edit Invoice",
                                onClick: () => console.log("Edit clicked"),
                            },
                        ]}
                        expandContent={
                            <Typography>
                                GST included. Payment due in 7 days.
                            </Typography>
                        }
                        cardSx={{ background: "#1ed2f7", color: "black" }}
                        contentSx={{ background: "#0000f" }}
                        onCardClick={() => console.log("Card clicked")}
                        hoverElevation={10}
                    />
                </div>

                <div className="mb-5">
                    <CustomBox />
                </div>

                <div className="mb-5">
                    <ElevatedPaper />
                </div>

                <ToastBar
                    open={toast.open}
                    severity={toast.severity}
                    message={toast.message}
                    onClose={() => setToast((t) => ({ ...t, open: false }))}
                />
            </div>
        </>
    );
}

export default App;
