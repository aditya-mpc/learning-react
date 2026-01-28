import { useState } from "react";
import { Globe } from "@gravity-ui/icons";
import "./App.css";
import CustomButton from "./components/button";

function App() {
    function handleClick() {
        console.log("Button clicked!");
    }
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <CustomButton
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold"
                variant="primary"
            >
                Primary Action
            </CustomButton>

            <CustomButton onClick={handleClick} variant="secondary">
                <Globe size={16} />
                Visit
            </CustomButton>
            <CustomButton variant="ghost">Ghost</CustomButton>
            <CustomButton variant="danger">Delete</CustomButton>
        </>
    );
}

export default App;
