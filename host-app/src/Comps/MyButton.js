import React from "react";
import * as AntdComponents from "antd";

const MyButton = ({ isActive, onClick, icon, children, className,htmlType='button' }) => {
  return (
    <AntdComponents.Button
      type="ghost"
      htmlType={htmlType}
      onClick={onClick}
      className={`common_button ${className} ${isActive ? "font-semibold bg-red-300" : "font-normal"}`}
      icon={icon}
      iconPosition="start"
    >
      {children}
    </AntdComponents.Button>
  );
};

export default MyButton;
