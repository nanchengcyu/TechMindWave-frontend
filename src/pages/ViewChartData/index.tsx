import { useParams } from '@umijs/max';
import { Card, Col, Divider, Row, Spin, message } from 'antd';
import { getChartByIdUsingGET } from '@/services/nanchengyubi/ChartController';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

const ViewChart: React.FC = () => {
  const [chart, setChart] = useState<API.BiResponse>();
  const [submitting] = useState<boolean>(false);
  const [option, setOption] = useState<any>();
  const params = useParams();

  const viewChart = async () => {
    try {
      const res = await getChartByIdUsingGET({
        // @ts-ignore
        id: params.id,
      });

      if (!res?.data?.genChart) {
        message.error('图表生成失败');
      }

      if (res.data) {
        const chartOptions = JSON.parse(res.data.genChart ?? '');

        if (!chartOptions) {
          message.error('生成图表为空');
          throw new Error('生成图表为空');
        } else {
          setOption(chartOptions);
          setChart(res.data);
          message.success('获取图表成功');
        }
      }
    } catch (e: any) {
      message.error('获取图表失败', e.error);
    }
  };

  useEffect(() => {
    viewChart();
  }, []);

  return (
    <div className="view-chart-data">
      <Row gutter={24}>
        <Col span={24}>
          <Card className="lightblue-card">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
                <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>原始数据</Divider>
              </div>
            </div>


            <div style={{ whiteSpace: 'pre-wrap', overflow: 'auto' }}>
              <p style={{ fontWeight: 'bold', textAlign: 'center' }}>
                {chart?.chartData}
              </p>
            </div>
            <Spin spinning={submitting} />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Card className="blurred-card">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
                <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>图表信息</Divider>
              </div>
            </div>
            <Row gutter={24}>
              <Col span={6}>分析目标：{chart?.goal}</Col>
              <Col span={6}>图表类型：{chart?.chartType}</Col>
              <Col span={6}>图表名称：{chart?.chartName}</Col>
              <Col span={6}>分析目标：{new Date(chart?.createTime).toLocaleString('zh-CN')}</Col>
            </Row>
            <Spin spinning={submitting} />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Card className="blurred-card">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
                <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>可视化图表</Divider>
              </div>
            </div>
            {option ? <ReactECharts option={option} /> : <div>请先在左侧进行提交</div>}
            <Spin spinning={submitting} />
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Card className="blurred-card">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
                <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>分析结论</Divider>
              </div>
            </div>
            <div style={{ whiteSpace: 'pre-wrap', overflow: 'auto' }}>
              <p>
                {chart?.genResult ?? <div>请先在左侧进行提交</div>}
              </p>
            </div>
            <Spin spinning={submitting} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ViewChart;
