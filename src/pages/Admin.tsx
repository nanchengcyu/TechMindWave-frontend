import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import {Alert, Card, Divider, Typography} from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;

/**
 *
 * @constructor
 */
const Admin: React.FC = () => {
  return (
    <PageContainer content={' 管理员首页介绍 '}>
      <Card>
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}> TechMindWave管理界面</Divider>
            </div>
          </div>
        </Typography.Title>

        <Alert
          message={'全力打造TechMindWave系统'}
          style={{
            margin: -12,
            marginBottom: 48,
            textAlign:"center"
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
            <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>管理员特权</Divider>
          </div>
        </div>
        <Title level={4}  style={{color:"#007BFF"}}>
          1. 增删改查用户
        </Title>
        <Title level={4} style={{color:"#007BFF"}}>
          2. 调用平台所有接口服务
        </Title>
        <Title level={4} style={{color:"#007BFF"}}>
          3. 更好进行图表管理
        </Title>
        <Title level={4} style={{color:"#007BFF"}}>
          4. 可以查看所有用户生成的图表
        </Title>
        <Title level={4} style={{color:"#007BFF"}}>
          5. 管理用户的订单
        </Title>
      </Card>
    </PageContainer>
  );
};
export default Admin;
