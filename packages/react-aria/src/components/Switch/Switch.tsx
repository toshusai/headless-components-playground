import { Switch as RacSwitch } from "react-aria-components";
import "./Switch.css";

export function Switch(props: { label: string }) {
  return (
    <RacSwitch>
      <div className="indicator" />
      {props.label}
    </RacSwitch>
  );
}
