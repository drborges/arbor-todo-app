import { InputHTMLAttributes } from "react";

/**
 * DISCLAIMER
 *
 * This file is a workaround until Playbook starts shipping TS types
 */

export type Sizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xlg" | "none";

export type MarginProps = {
  margin?: Sizes;
  marginLeft?: Sizes;
  marginRight?: Sizes;
  marginBottom?: Sizes;
  marginTop?: Sizes;
  marginX?: Sizes;
  marginY?: Sizes;
};

export type PaddingProps = {
  padding?: Sizes;
  paddingLeft?: Sizes;
  paddingRight?: Sizes;
  paddingBottom?: Sizes;
  paddingTop?: Sizes;
  paddingX?: Sizes;
  paddingY?: Sizes;
};

export type GlobalProps = MarginProps & PaddingProps;

export type InputProps<T = HTMLInputElement> = GlobalProps &
  InputHTMLAttributes<T> & {
    error?: string;
    label?: string;
  };

export type TextInputProps = InputProps;

export type Option = {
  uuid?: string;
  value: string;
  text: string;
  selected?: boolean;
};

export type SelectProps = InputProps & {
  placeholder: string;
  options: Option[];
};
