import React, { FC, useEffect, useState } from 'react';
import { StyledRadioGroupWrapper } from './styled';
import { RadioInput } from './RadioInput';

type TRadioGroup = {
  label: string | number;
  value: string | number;
};

interface IPropsRadioGroup {
  value?: TRadioGroup;
  className?: string;
  options: TRadioGroup[];
  onChange?: (option: TRadioGroup) => void;
}

export const RadioGroup: FC<IPropsRadioGroup> = ({
  className,
  options,
  value: val,
  onChange = function () {},
}) => {
  const [checkedInput, setCheckedInput] = useState<TRadioGroup | null>(
    options.find(() => true) || null,
  );

  useEffect(() => {
    if (val) setCheckedInput(val);
  }, [val]);

  useEffect(() => {
    if (checkedInput) onChange(checkedInput);
  }, [checkedInput]);

  return (
    <StyledRadioGroupWrapper {...{ className }}>
      {options.map(({ value, label }) => (
        <RadioInput
          {...{ value, label }}
          key={`${label}${
            (value === checkedInput?.value && '_isChecked') || ''
          }`}
          isChecked={value === checkedInput?.value}
          onChange={(e) =>
            setCheckedInput(
              options.find(
                (option) =>
                  option.value.toString() === e.target.value.toString(),
              ) || null,
            )
          }
        />
      ))}
    </StyledRadioGroupWrapper>
  );
};
