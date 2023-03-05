import React from "react";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";

export default () => {
  return (
    <Header
      variant="h2"
      description = 'See how you rank against other SMU Player'
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button disabled>Compare Players</Button>
          <Button disabled variant="primary">
            View Detailed Info
          </Button>
        </SpaceBetween>
      }

    >
      SMU Chess
    </Header>
  );
}