import { Caption, Button, Flex } from "playbook-ui";

function PoweredBy() {
  return (
    <Flex align="center" justify="center">
      <Caption size="xs" text="Powered by" />
      <Button
        link="https://github.com/drborges/arbor"
        newWindow
        padding="xs"
        variant="link"
      >
        Arbor
      </Button>
      <Caption size="xs" text="and" />
      <Button
        link="https://playbook.powerapp.cloud"
        newWindow
        padding="xs"
        variant="link"
      >
        Playbook
      </Button>
    </Flex>
  );
}

export function Footer() {
  return <PoweredBy />;
}
