import Link from "next/link";
import React from "react";
import { Select } from "antd";

const Navbar = () => {
  const { Option } = Select;
  return (
    <div className="flex fixed z-[9999999] w-full justify-around bg-black h-14 items-center text-[15px]">
      <Link href="/" className="text-white text-3xl mb-0">
        LOGO
      </Link>
      <div className="flex gap-[50px] items-center">
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="All Categories"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Not Identified</Option>
          <Option value="2">Closed</Option>
          <Option value="3">Communicated</Option>
          <Option value="4">Identified</Option>
          <Option value="5">Resolved</Option>
          <Option value="6">Cancelled</Option>
        </Select>
        <Link
          href={"/about"}
          className="text-white text-[.875rem] font-semibold tracking-wider leading-[1.5rem]"
        >
          About
        </Link>
        <Link
          className="text-white text-[.875rem] font-semibold tracking-wider leading-[1.5rem]"
          href={"/contact"}
        >
          Contact
        </Link>
      </div>
      <button className="text-white text-[.875rem] font-semibold tracking-wider leading-[1.5rem]">
        Login
      </button>
    </div>
  );
};

export default Navbar;
