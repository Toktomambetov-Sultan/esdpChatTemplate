import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React from "react";

import ChatCustomerList from "./ChatCustomerList/ChatCustomerList";
import ChatMessageBox from "./ChatMessageBox/ChatMessageBox";

const useStyles = makeStyles((theme) => ({
  customerBlock: {
    margin: "0 5px",
    width: "auto",
    border: "1px solid #f1f1f1",
    borderRadius: "5px",
    height: "60%",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
}));

const ChatWithCustomer = ({
  state,
  handleSubmit,
  onChange,
  selectCustomer,
}) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid component={Box} item xs={12} lg={4} bgcolor="#f8f9fa">
          <Box p={3}>
            <h2>Customer List</h2>
          </Box>
          <Grid component={Box} container className={classes.customerBlock}>
            <ChatCustomerList {...state} selectCustomer={selectCustomer} />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box bgcolor="#fff" p={3}>
            <h2>Who you gonna chat with?</h2>
          </Box>
          <Box p={2} height="530px" overflow="auto">
            <ChatMessageBox {...state} />
          </Box>
          <Box>
            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                wrap="nowrap"
                spacing={2}
              >
                <TextField
                  onChange={onChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                  id="sendingMessage"
                  type="sendingMessage"
                  name="sendingMessage"
                  value={state.sendingMessage}
                  placeholder="Type a message..."
                />

                <Grid item>
                  <Button color="primary" variant="outlined" type="submit">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatWithCustomer;
