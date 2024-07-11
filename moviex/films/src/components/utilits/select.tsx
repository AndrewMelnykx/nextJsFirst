import React, { ChangeEvent, useEffect, useState } from 'react';

interface MainProps {
  options: Options[];
  select_id: string;
  select_name: string;
  label_name: string;
  label_id: string;
  label_text: string;
  valueOfSelectedOption: string;

  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
interface Options {
  value: string;
  id: number;
  text: string;
}

function Select({
  options,
  select_name,
  select_id,
  label_id,
  label_name,
  label_text,
  valueOfSelectedOption,

  onChange,
}: MainProps) {
  return (
    <form className="filter_form">
      <label htmlFor={label_name} id={label_id}>
        <i>{label_text}</i>
      </label>
      <select
        id={select_id}
        name={select_name}
        value={valueOfSelectedOption}
        className="filter_input"
        onChange={(e) => {
          onChange(e);
        }}
      >
        {options.map((opt) => (
          <option key={opt.id} selected value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </form>
  );
}
export default Select;
