import { Box, Grid, ListItem } from "@material-ui/core";
import React from "react";
import MDSpinner from "react-md-spinner";

const ChatCustomerList = ({
  customers,
  customerIsLoading,
  selectedCustomer,
  selectCustomer,
}) => {
  if (customerIsLoading) {
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
      <Grid item xl={12} component={Box} width="100%">
        {customers.map((customer) => (
          <ListItem
            key={customer.id}
            selected={selectedCustomer === customer.id}
            onClick={() => selectCustomer(customer.id)}
          >
            {customer.name}{" "}
          </ListItem>
        ))}
      </Grid>
    );
  }
};
export default ChatCustomerList;
