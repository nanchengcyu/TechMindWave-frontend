import { useModel } from '@@/exports';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, List, message, Modal, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { deleteEssayUsingPOST, listMyEssayByPageUsingPOST } from "@/services/nanchengyubi/essayController";

const { Search } = Input;

const MyEssayPage: React.FC = () => {
  const initSearchParams = {
    current: 1,
    pageSize: 4,
    sortField: 'createTime',
    sortOrder: 'desc',
  };

  const [searchParams, setSearchParams] = useState<API.EssayQueryRequest>({ ...initSearchParams });
  const [essayList, setEssayList] = useState<API.Essay[]>();
  const [essayTotal, setEssayTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const loadData = async () => {
    setLoading(true);
    try {
      let res = await listMyEssayByPageUsingPOST(searchParams);
      if (res.data) {
        setEssayList(res.data.records ?? []);
        setEssayTotal(res.data.total ?? 0);
      } else {
        message.error('获取我的文章失败');
      }
    } catch (e: any) {
      message.error('获取我的文章失败' + e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [searchParams]);

  const handleDelete = async (essayId: any) => {
    Modal.confirm({
      title: '确认删除',
      icon: <ExclamationCircleOutlined />,
      content: '确定要删除这篇文章吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        try {
          const res = await deleteEssayUsingPOST({ id: essayId });
          if (res.data) {
            message.success('删除成功');
            loadData();
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
    <div className="my-essay-page">
      <div className="margin-20">
        <Search
          placeholder="请输入搜索内容"
          loading={loading}
          enterButton
          onSearch={(value) => {
            setSearchParams({ ...initSearchParams, essayName: value });
          }}
        />
      </div>

      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
        pagination={{
          showTotal: () => `共 ${essayTotal} 条记录`,
          showSizeChanger: true,
          showQuickJumper: true,
          pageSizeOptions: ['10', '20', '30'],
          onChange: (page, pageSize) => {
            setSearchParams({ ...searchParams, current: page, pageSize });
          },
          current: searchParams.current,
          pageSize: searchParams.pageSize,
          total: essayTotal,
        }}
        loading={loading}
        dataSource={essayList}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card style={{ height: '66vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <List.Item.Meta
                  avatar={<Avatar src={currentUser?.userAvatar} />}
                  title={currentUser?.userName}
                />
                <Button danger onClick={() => handleDelete(item.id)}>删除</Button>
              </div>
              <br/>
              <div style={{ whiteSpace: 'pre-line' }}>{item.genEssay}</div>

            </Card>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '14px', color: 'gray' }}>
                {'文章生成时间：' + new Date(item.createTime).toLocaleString()}
              </div>
            </div>


          </List.Item>
        )}
      />
    </div>
  );
};

export default MyEssayPage;
