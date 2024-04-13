import {Button, Card, Col, Divider, Form, message, Row, Select, Space, Spin} from 'antd';
import React, {useState} from 'react';

import TextArea from 'antd/es/input/TextArea';
import {ESSAY_TYPE_SELECT} from "@/constants";
import './AddEssay.css';
import {genEssayUsingPOST} from "@/services/nanchengyubi/essayController"; // 导入自定义的 CSS 样式文件

const AddChart: React.FC = () => {
  const [essay, setEssay] = useState<API.EssayResponse>();

  const [submitting, setSubmitting] = useState<boolean>(false);

  /**
   * 提交表单
   * @param values
   */
  const onFinish = async (values: any) => {
    // 避免重复提交
    if (submitting) {
      return;
    }
    // 开始提交
    setSubmitting(true);
    setEssay(undefined);
    const param = {
      ...values,
    };
    try {
      const res = await genEssayUsingPOST(param, {});
      if (!res?.data) {
        message.error('分析失败');
      } else {
        setEssay(res.data);// 设置文章内容到essay状态
        message.success('分析成功');

      }
    } catch (e: any) {
      message.error('分析失败,' + e.message);
    }
    // 提交完成
    setSubmitting(false);
  };

  // @ts-ignore
  return (

    <div className="add-chart">

      <Row gutter={24}>
        <Col span={12}>
          <Card>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block'}}>
                <Divider
                  style={{fontSize: '18px', fontWeight: 'bold', color: 'white', margin: 0}}>智能文章生成</Divider>
              </div>
            </div>
            <Form
              name="addChart"
              labelAlign="left"
              labelCol={{span: 4}}
              wrapperCol={{span: 16}}
              onFinish={onFinish}
              initialValues={{}}
            >

              <Form.Item
                name="essayName"
                label="文章描述"
                rules={[{required: true, message: '请输入文章描述！也可以直接输入文章标题即可生成'}]}
              >
                <TextArea
                  placeholder="请输入文章描述！也可以直接输入文章标题即可生成"
                  autoSize={{minRows: 5}} // 设置最小行数为5
                />
              </Form.Item>


              <Form.Item
                name="essayType"
                label="文章类型"
                rules={[{required: true, message: '请选择文章类型！'}]}
              >
                <Select
                  options={ESSAY_TYPE_SELECT}
                ></Select>
              </Form.Item>


              <Form.Item wrapperCol={{span: 16, offset: 4}}>
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={submitting}
                    disabled={submitting}
                  >
                    确定上传
                  </Button>
                  <Button htmlType="reset">重置内容</Button>

                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col span={12}>
          <Card style={{height: '600px', overflowY: 'scroll'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block'}}>
                <Divider style={{fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0}}>文章内容</Divider>
              </div>
            </div>
            <Card>
              {essay?.essayContent ? (
                <div style={{padding: '10px', fontSize: '16px', whiteSpace: 'pre-line'}}>
                  {essay.essayContent}
                </div>
              ) : (
                <div style={{textAlign: 'center', fontSize: '16px'}}>
                  请先在左边输入必填项，即可自动生成文章
                </div>
              )}
              <Spin spinning={submitting} size="large"/>
            </Card>
          </Card>
        </Col>

      </Row>
    </div>

  );
};
export default AddChart;
