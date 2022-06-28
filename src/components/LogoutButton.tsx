import {Box,Button} from "@mui/material";
// import {withRouter} from "react-router-dom";
import {withRouter} from 'next/router';
import React from "react";

import { useAuth } from '@/hooks/auth';

const LogoutButton = () => {
  const { logout } = useAuth();

  const logoutSubmit = (e: any) => {
    e.preventDefault();
    //log out..
    logout();
  }

  return (
    <React.Fragment>
      <Box
        sx={{
            marginTop: 8,
        }}component={"form"} onSubmit={logoutSubmit}>
        <Button variant="contained" color="secondary" type={"submit"}>
          Logout
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default withRouter(LogoutButton)