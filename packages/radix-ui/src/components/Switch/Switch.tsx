import * as RadixSwitch from "@radix-ui/react-switch";
import "./Switch.css";

export const Switch = (props: { label: string }) => (
  <label className="label">
    <RadixSwitch.Root className="switch">
      <RadixSwitch.Thumb className="switch-thumb" />
    </RadixSwitch.Root>
    {props.label}
  </label>
);
