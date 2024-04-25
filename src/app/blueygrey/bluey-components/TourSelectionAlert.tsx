import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box"

export default function YouMustSelect() {
  return (
    <Box maxWidth={"100%"} alignContent={"center"}>
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error" onClose={() => {}}>
        <AlertTitle>Don't you want to see interesting things?</AlertTitle>
        You must select at least one tour option!
      </Alert>
    </Stack>
    </Box>
  );
}
