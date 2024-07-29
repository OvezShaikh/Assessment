import React from 'react';
import './Button.css'; // Import the CSS module or stylesheet
import { HiArrowNarrowRight } from "react-icons/hi";


const Button = () => {
  return (
    <div className="button-container">
      <button className="button">
        <span>Start your Complete Ai Journey</span>
        <HiArrowNarrowRight/>
      </button>
    </div>
  );
};

export default Button;


















// import { Button, CircularProgress } from "@mui/material";
// import React from "react";
// const PrimaryButton = ({ children, sx, isLoading, ...otherProps }) => {
//   return (
//     <Button
//       variant="contained"
     
//       color={"warning"}
//       sx={{
//         background: "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
//         color: "white",
//         alignitems: "flex-start",
//         textTransform: "none",
//         borderRadius: "3px",
//         fontStyle: "normal",
//         fontFamily: "satoshi",
//         boxShadow: "none",
//         '&:hover': {
//           boxShadow: 'none',
//           width: "344px"
//         },
//         ...sx,
//       }}
//       {...otherProps}
//     >
//       {isLoading && <CircularProgress size={20} className="me-2 text-white " />}
//       {children}
//     </Button>
//   );
// };

// export default PrimaryButton;