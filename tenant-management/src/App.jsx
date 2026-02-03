import { useState } from "react";
import { Globe, ChevronRight, TrashBin, Sphere } from "@gravity-ui/icons";
import "./App.css";
import { CustomButton } from "./components/button";
import { ToolTip } from "./components/tooltip";
import { CircleInfo } from "@gravity-ui/icons";

function App() {
    function handleClick() {
        console.log("Button clicked!");
    }
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="card --color-background">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            {/* Basic button */}
            <CustomButton
                label="Save Changes"
                variant="primary"
                onPress={() => console.log("Saved")}
            />
            {/* Custom Button with tooltip */}
            <CustomButton
                icon={<CircleInfo />}
                iconOnly
                variant="tertiary"
                className="{}"
                tooltipContent={<p>More information here</p>}
                tooltipEnterDelay={200}
                tooltipExitDelay={100}
            />
            <CustomButton
                label="Save Changes"
                variant="primary"
                isDisabled={true}
                onPress={() => console.log("Saved")}
            />
            {/* Loading button */}
            <CustomButton
                label="Uploading..."
                isLoading={true}
                icon={<Sphere size="sm" />}
                variant="secondary"
            />
            {/* Disabled button */}
            <CustomButton label="Submit" isDisabled={true} variant="ghost" />
            {/* Icon only button */}
            <CustomButton
                icon={<TrashBin />}
                iconOnly={true}
                size="sm"
                variant="danger"
            />
            {/* Right side icon button */}
            <CustomButton
                label="Next"
                icon={<ChevronRight />}
                iconPosition="end"
            />

            {/* Tooltip Example */}
            <ToolTip></ToolTip>
        </>
    );
}

export default App;
