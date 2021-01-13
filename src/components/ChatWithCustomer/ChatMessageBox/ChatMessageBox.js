import { Box, Grid } from "@material-ui/core";
import React from "react";
import MDSpinner from "react-md-spinner";
import "./ChatMessageBox.css";

const ChatMessageBox = ({ chat, chatIsLoading, sender }) => {
  if (chatIsLoading) {
    return (
      <Grid
        item
        container
        component={Box}
        xl={12}
        height="100%"
        alignItems="center"
        justify="center"
      >
        <MDSpinner size="72" />
      </Grid>
    );
  } else {
    return (
      <Grid item xl={12}>
        {chat.map((message) => (
          <div key={message.id} className="message">
            <Box
              p={1.5}
              m={1}
              className={message.receiver !== sender ? "balon1" : "balon2"}
            >
              {message.text}
            </Box>
          </div>
        ))}
      </Grid>
    );
  }
};
export default ChatMessageBox;
