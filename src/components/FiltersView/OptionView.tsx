import { memo } from "react";
import { Body, SelectableCard } from "playbook-ui";

import { InputProps } from "../../helpers/playbook";

export type OptionViewProps = InputProps & {
  inputId?: string;
};

export const OptionView = memo(({ label, ...props }: OptionViewProps) => {
  return (
    <SelectableCard multi={false} paddingY="none" margin="none" {...props}>
      <Body color={props.checked ? "link" : "light"} text={label} />
    </SelectableCard>
  );
});
