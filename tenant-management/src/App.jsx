import { useState } from "react";
import "./App.css";
import ToastBar from "./components/toast";
import CustomButton from "./components/buttons/button";
import SendIcon from "@mui/icons-material/Send";
import IconButtons from "./components/buttons/icon-button";
import Tooltip from "./components/tooltip";
import CustomCard from "./components/card";

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
            <div className="card">
                <button onClick={handleClick}>count is {count}</button>
                <CustomButton
                    button="Delete"
                    disabled="false"
                    size="large"
                    endIcon={<SendIcon />}
                />
                <IconButtons />
                <Tooltip />
                <CustomCard />
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
