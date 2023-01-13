import React from "react";
import { Controller } from "react-hook-form";
import TextFieldCustom from "./TextFieldCustom";

export default function ControllerCustom(props) {
  return (
    <div>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <TextFieldCustom
            onBlur={onBlur} // notify when input is touched
            onChange={onChange} // send value to hook form
            checked={value}
            inputRef={ref}
            label={props.label}
            type={props.type}
            error={props.error}
            helperText={props.helperText}
          />
        )}
      />
    </div>
  );
}
