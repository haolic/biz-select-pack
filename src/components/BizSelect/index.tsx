import React from 'react';
import { Icon, Popover } from 'antd';
import HBizContent from './HBizContent';
import './index.less';

interface BizSelectProps {
  title?: string;
  data?: {
    key: string;
    title: string;
    list: {
      title: string;
      key: string;
      status: boolean;
      [propName: string]: any;
    }[];
  }[];
  onChange?(data: any, onChange?: any): void;
}

const BizSelect = (props: BizSelectProps) => {
  return (
    <div className="h-biz-select-container">
      <Popover
        content={<HBizContent data={props.data} onChange={props.onChange} />}
        title={null}
        trigger="hover"
        placement="bottom"
        getPopupContainer={p => {
          return p;
        }}
        overlayClassName="h-biz-pop-wrap"
      >
        <div className="h-biz-title">
          <span>{props.title}</span>
          <span className="h-biz-select-icon">
            <Icon type="right" />
          </span>
        </div>
      </Popover>
    </div>
  );
};

module.exports = BizSelect;
