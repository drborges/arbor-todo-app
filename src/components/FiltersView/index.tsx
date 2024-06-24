import { useArbor } from "@arborjs/react";
import { Caption, Flex } from "playbook-ui";

import { store } from "../../stores/filter";

import { OptionView } from "./OptionView";

export const FiltersView = () => {
  // Connects this component to the filters store
  // which will basically cause this component to re-render
  // only when changes are made to that store, and only the ones
  // affecting the fields this components knows about.
  const filter = useArbor(store);

  return (
    <Flex align="center" justify="right" paddingX="sm" paddingY="sm">
      <Caption marginRight="xs" size="xs" text="Show:" />
      <OptionView
        checked={filter.is("all")}
        inputId="all"
        label="All"
        name="filter"
        onChange={filter.onChange}
        value="all"
      />
      <OptionView
        checked={filter.is("done")}
        inputId="done"
        label="Done"
        marginX="xs"
        name="filter"
        onChange={filter.onChange}
        value="done"
      />
      <OptionView
        checked={filter.is("wip")}
        inputId="wip"
        label="Wip"
        name="filter"
        onChange={filter.onChange}
        value="wip"
      />
    </Flex>
  );
};
