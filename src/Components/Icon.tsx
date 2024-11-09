import React from "react";
interface IconProps {
    iconName: string;
  }
  
  const Icon: React.FC<IconProps> = ({ iconName }) => {
    return <i className={`fa ${iconName}`} />;
  };
  
  export default Icon;