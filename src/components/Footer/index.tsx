import {GithubOutlined, WechatOutlined} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
import { WELCOME} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '南城余';
  const currentYear = new Date().getFullYear();
  // const beian = '桂ICP备2023002099号-1';
  // const beianUrl = 'https://beian.miit.gov.cn/#/Integrated/index';
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage}
          {/*|{' '}*/}
          {/*<a href={beianUrl} target="_blank" rel="noreferrer">*/}
          {/*  {beian}*/}
          {/*</a>*/}
        </>
      }
      links={[
        {
          key: '欢迎你加入星球 ',
          title: '学习圈子',
          href: WELCOME,
          blankTarget: true,
        },

        {
          key: 'github',
          title: (
            <>
              <GithubOutlined />  个人GitHub:南城余
            </>
          ),

          href: 'https://github.com/nanchengcyu' ,
          blankTarget: true,
        },
        {
          key: '个人公众号',
          title: (
            <>
              <WechatOutlined /> 个人公众号:南城余
            </>
          ),
          href: 'https://mp.weixin.qq.com/s/wgnZm1KVEIh-vJxXQreTLQ',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
