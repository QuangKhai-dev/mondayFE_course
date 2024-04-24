import { Tooltip } from 'antd';
import React from 'react';

const ButtonTooltip = ({
  content,
  tooltipContent,
  placement = 'bottom',
  onClick,
}) => {
  return (
    <Tooltip placement={placement} title={tooltipContent}>
      <button onClick={onClick}>{content}</button>
    </Tooltip>
  );
};

export default ButtonTooltip;
