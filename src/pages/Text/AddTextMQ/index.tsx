import { UploadOutlined } from '@ant-design/icons';
import {Button, Card, Divider, Form, Input, message, Select, Space, Upload} from 'antd';
import React, { useState } from 'react';
import {genTextTaskAsyncAiMqUsingPOST} from "@/services/nanchengyubi/textController";
import {useForm} from "antd/es/form/Form";
import './AddTextMQ.css';
/**
 * 添加文本（异步）页面
 * @constructor
 */
const AddTextMQ: React.FC = () => {
  const [form] = useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);

  /**
   * 提交
   * @param values
   */
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);
    // 对接后端，上传数据
    const params = {
      ...values,
      file: undefined,
    };
    try {
      const res = await  genTextTaskAsyncAiMqUsingPOST(params, {}, values.file.file.originFileObj);
      if (!res?.data) {
        message.error('分析失败');
      } else {
        message.success('分析任务提交成功，稍后请在我的文本页面查看');
        form.resetFields();
      }
    } catch (e: any) {
      message.error('分析失败，' + e.message);
    }
    setSubmitting(false);
  };

  return (

    <div className="add-text-async">

      <Card >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>智能转换文本</Divider>
          </div>
        </div>
        <Form form={form} name="addText" labelAlign="left" labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }} onFinish={onFinish} initialValues={{}}>
          <Form.Item name="name" label="文本名称">
            <Input placeholder="请输入文本名称" />
          </Form.Item>
          <Form.Item name="textType" label="文本类型">
            <Select
              options={[
                { value: 'markdown', label: 'markdown格式' },
              ]}
            />
          </Form.Item>
          <Form.Item name="file" label="原始数据">
            <Upload name="file" maxCount={1}>
              <Button icon={<UploadOutlined />}>上传 TXT 文件</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
                提交
              </Button>
              <Button htmlType="reset">重置</Button>
            </Space>

          </Form.Item>

        </Form>

        <div className="tip">
          <a href="https://www.yuque.com/yuque/gpvawt/lnobo9" target="_blank" style={{ color: '#1890ff' }} rel="noreferrer">
            什么是markdown？点击此处了解
          </a>
          <br/>
          <a href="/person/user_info" style={{ color: '#1890ff' }}>

            领取每日智能转换文本次数获取请到个人中心个人信息页面-点击文字-跳转
          </a>
        </div>
      </Card>
    </div>

  );
};
export default AddTextMQ;
