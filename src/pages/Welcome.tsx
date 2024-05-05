import { IMAGES } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Carousel, Divider, Image, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Paragraph } = Typography;

const blockContent = `TechMindWave平台——您的智能图文生成专家。无需深厚的数据分析背景，您也能轻松创建专业级别的内容。\n\n我们融合了AI技术和自动化工具，致力于为您提供快速、精确、且易于理解的数据洞察。探索TechMindWave，让复杂的数据分析变得简单而直观。`;

const BIIntroduce = `TechMindWave，引领人工智能的图文生成解决方案。\n\n我们的平台利用尖端的机器学习技术，能够迅速、准确地解读数据，生成图表、文章和问答内容。无论是商业报告还是学术研究，TechMindWave都能助您深入挖掘数据背后的故事，加速决策和研究过程。\n\n智能文本分析揭示关键信息和情感倾向，而强大的问题分析能力则为您提供即时的解答和建议。TechMindWave，您全面的智能助手，助力您在信息时代中快速获取优势。`;

const tedianContent = `1. 多领域图文生成：TechMindWave覆盖商业、科研等多个领域，提供深入的多角度分析。\n\n2. 智能图表生成：自动解析数据，生成直观图表，帮助您快速把握数据趋势。\n\n3. 全面文本理解：从大量文本中提取关键信息和主题，加速理解和处理速度。\n\n4. 自动问题分析：具备强大的问题分析能力，为您提供准确的答案或解决方案。`;
const Welcome: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // @ts-ignore
    Promise.all(IMAGES)
      .then((images) => setLoadedImages(images))
      .catch((error) => console.error(error));
  }, []);


  return (
    <PageContainer content={'欢迎来到南城余的TechMindWave平台'}>
      <Card>
        <Alert
          message={'欢迎使用南城余的TechMindWave平台！'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />

        <Typography.Title level={1} style={{ textAlign: 'center' }}>
          <Divider style={{ fontSize: 24, fontWeight: 'bold', color: 'white', backgroundColor: '#333' }}>
            TechMindWave平台
          </Divider>
        </Typography.Title>
        <Paragraph style={{ color: 'black', textAlign: 'center',  fontSize: '16px' }}>
          我们的TechMindWave平台是革命性的数据分析工具，为用户提供轻松、快速、智能化的数据分析体验。
        </Paragraph>
        <Paragraph >
          <pre>{blockContent}</pre>
        </Paragraph>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Divider style={{ fontSize: 24, fontWeight: 'bold', color: 'white', backgroundColor: '#333' }}>
            TechMindWave介绍
          </Divider>
        </div>
        <Paragraph>
          <pre>{BIIntroduce}</pre>
        </Paragraph>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <Divider style={{ fontSize: 24, fontWeight: 'bold', color: 'white', backgroundColor: '#333' }}>
            TechMindWave特点
          </Divider>
        </div>
        <Paragraph >
          <pre>{tedianContent}</pre>
        </Paragraph>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <Divider style={{ fontSize: 24, fontWeight: 'bold', color: 'white', backgroundColor: '#333' }}>
            科技照片展示
          </Divider>
        </div>
        <Paragraph style={{ color: '#006fff', textAlign: 'center' }}>
          <Carousel autoplay autoplaySpeed={10000}>
            {loadedImages.map((image, index) => (
              <div key={index}>
                <Image src={image.default} />
              </div>
            ))}
          </Carousel>
        </Paragraph>

      </Card>
    </PageContainer>
  );
};

export default Welcome;
