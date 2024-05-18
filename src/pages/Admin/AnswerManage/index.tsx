import {Avatar, Button, Card, Col, Divider, List, message, Modal, Result, Row} from 'antd';
import React, {useEffect, useState} from 'react';


import ReactMarkdown from 'react-markdown';
import {
  deleteAiAssistantUsingPOST, listAiAssistantByPageUsingPOST,
} from '@/services/nanchengyubi/AiAssistantController';
import {useModel} from '@@/exports';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import Search from 'antd/es/input/Search';

const ChatManage: React.FC = () => {
  const [data, setData] = useState<API.AiAssistant[]>();
  const [total, setTotal] = useState<number>(0);

  const initParams = {
    current: 1,
    pageSize: 5,
    sortField: 'createTime',
    sortOrder: 'DESC',
  };

  /**
   * 查询参数
   */
  const [searchParams, setSearchParams] = useState<API.AiAssistantQueryRequest>({
    ...initParams,
  });
  /**
   * 获取当前用户
   */
  const {initialState} = useModel('@@initialState');
  const {currentUser} = initialState || {};

  const initData = async () => {
    try {
      const res = await listAiAssistantByPageUsingPOST(searchParams);
      if (res.code === 0) {
        console.log('获取内容:', res.data?.records);
        setData(res?.data?.records ?? []);
        setTotal(res?.data?.total ?? 0);
      } else {
        message.error('获取AI解答内容失败');
      }
    } catch (e: any) {
      message.error('获取AI解答内容失败' + e.message);
    }
  };

  /**
   * 变化时执行此处
   */
  useEffect(() => {
    initData();
  }, [searchParams]);

  /**
   * 删除对话
   * @param chartId
   */
  const handleDelete = (chartId: any) => {
    Modal.confirm({
      title: '确认删除',
      icon: <ExclamationCircleOutlined/>,
      content: '确定要删除此对话吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        try {
          const res = await deleteAiAssistantUsingPOST({id: chartId});
          console.log('res:', res.data);
          if (res.data) {
            message.success('删除成功');
            // 删除成功后重新加载AI对话数据
            initData();
          } else {
            message.error('删除失败');
          }
        } catch (e: any) {
          message.error('删除失败' + e.message);
        }
      },
    });
  };

  return (
    <div className="my-chart-page">
      <div className="margin-20">
        <Search
          placeholder="请输入搜索内容"
          enterButton
          onSearch={(value) => {
            setSearchParams({
              ...initParams,
              questionGoal: value,
            });
          }}
        />
      </div>

      <List
        pagination={{
          // 设置分页
          showTotal: () => `共 ${total} 条记录`,
          showSizeChanger: true,
          showQuickJumper: true,
          pageSizeOptions: ['10', '20', '30'],
          onChange: (page, pageSize) => {
            setSearchParams({
              ...searchParams,
              current: page,
              pageSize,
            });
          },
          current: searchParams.current,
          pageSize: searchParams.pageSize,
          total: total,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card style={{width: '100%'}}>
              <List.Item.Meta
                avatar={<Avatar src={item.user?.userAvatar}/>}
                title={item.user?.userName}
              />
              <>
                {item.questionStatus === 'wait' && (
                  <>
                    <Result
                      status="warning"
                      title="排队中...."
                      subTitle={item.execMessage ?? '系统繁忙，请稍后重试'}
                    />
                    <Row justify={'end'}>
                      <Col>
                        <Button danger onClick={() => handleDelete(item.id)}>
                          删除
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
                {item.questionStatus === 'running' && (
                  <>
                    <Result status="info" title="正在解答中...." subTitle={item.execMessage}/>
                    <Row justify={'end'}>
                      <Col>
                        <Button danger onClick={() => handleDelete(item.id)}>
                          删除
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
                {item.questionStatus === 'succeed' && (
                  <>
                    <p
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '16px',
                      }}
                    >
                      {'原问题：' + item.questionGoal}
                    </p>


                    <Divider style={{fontWeight: 'bold', color: 'blue', fontSize: '16px'}}>
                      解答
                    </Divider>
                    <div style={{
                      maxHeight: '400px', // 限制最大高度为400px
                      overflow: 'auto', // 在需要时提供滚动条
                      padding: '10px', // 提供一些内部空间以增强可读性
                      border: '1px solid #ddd', // 可选，为了更好的视觉隔离，您可以加上边框
                      borderRadius: '4px', // 可选，圆角边框看起来更柔和
                    }}>
                      <ReactMarkdown>
                        {item?.questionResult ?? ''}
                      </ReactMarkdown>
                    </div>

                    <Divider/>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <div style={{fontSize: '14px', color: 'gray'}}>
                        {'回答时间：' + (item.createTime ? new Date(item.createTime).toLocaleString() : '未知时间')}
                      </div>
                    </div>
                    <Row justify={'end'}>
                      <Col>
                        <Button danger onClick={() => handleDelete(item.id)}>
                          删除
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
                {item.questionStatus === 'failed' && (
                  <>
                    <Result status="error" title="解答失败" subTitle={item.execMessage}/>
                    <Row justify="end">
                      <Col style={{paddingRight: '10px'}}>
                        <Button type="primary" onClick={() => message.warning('敬请期待')}>
                          重试
                        </Button>
                      </Col>
                      <Col>
                        <Button danger onClick={() => handleDelete(item.id)}>
                          删除
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
              </>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default ChatManage;
