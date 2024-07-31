import { Button, CircularProgress } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";
import "./Secondarybutton.css";

import React from "react";

const SecondaryButton = ({
    children,
    startIcon,
    color = "text.primary",
    variant = "outlined",
    loaderColor,
    sx,
    isLoading,
    ...otherProps
}) => {
    return (
        <Button
            className="max-tablet:text:[14px] flex arrow-button hover:text-left"
            sx={{
                color: "var(--Linear-BG, #46BA3C)",
                height: "48px",
                width: "309px",
                gap: "40px",
                // fontSize: {
                //   xs: "0.6rem",
                //   md: "0.8rem",
                // },
                // alignItems: "center",
                // background: "black",
                background: "linear-gradient(90deg, #46BA3C 0%, #32a852 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                display: "flex",
                alignitems: "flex-start",
                textTransform: "none",
                textShadow: `
                     1px 1px 0px rgba(70, 186, 60, 0.5),
                    -1px 1px 0px rgba(50, 168, 82, 0.5),
                     1px -1px 0px rgba(70, 186, 60, 0.5),
                     -1px -1px 0px rgba(50, 168, 82, 0.5)`,
                borderRadius: "10px",
                border: "1px solid var(--Linear-BG, #46BA3C)",
                // borderImage: 'linear-gradient(#FF9F0A, red) 20',
                borderWidth: '2px',
                position: "realtive",


                ...sx,
            }}
            {...otherProps}
        >
            Start Your AI Journey Here

            <div className="arrow-container "><FaArrowRight className=" arrow h-[50px] hover:justify-end" />
            </div>

        </Button>
    );
};

export default SecondaryButton;
