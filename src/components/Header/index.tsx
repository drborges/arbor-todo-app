import { Flex, Title } from "playbook-ui";

export function Header() {
  return (
    <Flex justify="center">
      <Title bold={false} color="lighter" marginY="md" size={2} text="TODO" />
    </Flex>
  );
}
