import React, { useCallback, useState } from "react";

import CreatableSelect from "react-select/creatable";
import { colourStyles } from "./types";

export interface CreatableEditableSelectOption {
  label: string;
  value: string;
}

export type CreatableEditableSelectValue = CreatableEditableSelectOption;

interface Props {
  options: CreatableEditableSelectOption[];
  value: CreatableEditableSelectValue[];
  onChange: (value: CreatableEditableSelectValue[]) => void;
  stylesCard?: boolean;
}

const CreatableEditableSelect: React.FC<Props> = ({
  options,
  value: propValue,
  onChange,
  stylesCard,
}) => {
  const [editingValue, setEditingValue] = useState<string>();

  const handleChange = useCallback(
    (newValue: CreatableEditableSelectValue[] & any) => {
      onChange(newValue);
    },
    [onChange]
  );

  const handleEditChange = useCallback(
    (inputValue: string, data: CreatableEditableSelectValue) => {
      const idx = propValue.findIndex((v) => v.value === data.value);
      const newValue = [...propValue];

      if (inputValue.length === 0) {
        newValue.splice(idx, 1);
      } else {
        newValue[idx] = {
          label: inputValue,
          value: inputValue,
        };
      }

      onChange(newValue);

      setEditingValue(undefined);
    },
    [propValue, onChange]
  );

  const MultiValueLabel = useCallback(
    ({ data }: { data: CreatableEditableSelectValue }) => {
      if (editingValue && editingValue === data.value) {
        return (
          <input
            type="text"
            style={{ color: "#fff" }}
            defaultValue={data.value}
            onKeyDown={(ev) => {
              ev.stopPropagation();
              if (ev.key === "Enter") {
                handleEditChange(ev.currentTarget.value, data);
              }
            }}
            onBlur={(ev) => {
              handleEditChange(ev.currentTarget.value, data);
            }}
            autoFocus
          />
        );
      }
      return (
        <button
          style={{
            borderRadius: 15,
            fontSize: stylesCard ? 12 : undefined,
            color: stylesCard ? "#fff" : "black",
            backgroundColor: "transparent",
            borderColor: "transparent",
          }}
          onClick={() => {
            setEditingValue(data.value);
          }}
        >
          {data.value}
        </button>
      );
    },
    [handleEditChange, editingValue]
  );

  return (
    <CreatableSelect
      isMulti
      value={propValue}
      onChange={handleChange}
      placeholder={"Введите текст"}
      styles={stylesCard ? colourStyles : undefined}
      options={options}
      components={{
        MultiValueLabel,
      }}
    />
  );
};

export default CreatableEditableSelect;
