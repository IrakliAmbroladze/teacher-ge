"use client";
import React, { useState } from "react";
import { updateWeekPlanDay, updateWeekPlanMonth } from "@/utils";
import { monthNamesInGeoArray } from "@/constants";

export default function DateArea({
  id,
  date,
  month,
}: {
  id: number;
  date: number;
  month: string;
}) {
  const [day, setDay] = useState<number>(date);
  const [geoMonth, setGeoMonth] = useState<string>(month);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    updatedb: (id: number, value: string) => void,
  ) => {
    e.preventDefault();
    setFunction(e.target.value);
    updatedb(id, e.target.value);
  };
  const Select = ({
    value,
    onChange,
    children,
  }: {
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
  }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="px-2 text-black bg-[#88b545] outline-none appearance-none"
      >
        {children}
      </select>
    );
  };
  return (
    <div className="flex">
      <Select
        value={day}
        onChange={(e) => handleChange(e, setDay, updateWeekPlanDay)}
      >
        {[...Array(31)].map((_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </Select>
      <Select
        value={geoMonth}
        onChange={(e) => handleChange(e, setGeoMonth, updateWeekPlanMonth)}
      >
        {monthNamesInGeoArray.map((m, index) => (
          <option key={index} value={m}>
            {m}
          </option>
        ))}
      </Select>
    </div>
  );
}
