import { Box } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";
import { AppBar } from "~/components";

type RouterError = {
  statusText?: string;
  message?: string;
};

const ErrorNotFoundPage = () => {
  const error = useRouteError() as RouterError;

  return (
    <div id="error-page">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar />
        <Box sx={{ textAlign: "center" }}>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default ErrorNotFoundPage;
