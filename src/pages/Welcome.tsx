import { IMAGES } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Carousel, Divider, Image, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Paragraph } = Typography;

const blockContent = `TechMindWave平台让您轻松完成复杂数据分析任务，即使对数据分析一无所知。我们利用AI接口和自动化技术，为您提供快速、准确、可靠的数据洞察。立即体验TechMindWave，让数据分析变得简单而智能！`;
const BIIntroduce = `TechMindWave是领先的人工智能解决方案，专注于图表分析、文本分析和问题分析。借助先进的机器学习技术，它能迅速准确地解读和处理各种复杂数据。在图表分析方面，TechMindWave能自动识别并解释图表中的趋势、模式和关联，助您深入理解数据背后的洞察。

通过文本分析，它能提取文本的关键信息、情感倾向和主题，为您提供全面的文本理解支持。不论是处理大量文本数据还是理解复杂文章，TechMindWave都能帮助您快速获取所需信息，从而加速决策和研究过程。

此外，TechMindWave还具备强大的问题分析能力，能自动分析问题并提供准确的答案或解决方案。不论是企业决策难题还是个人研究知识盲点，TechMindWave都能为您提供有价值的见解和建议。综合图表分析、文本分析和问题分析功能，TechMindWave是全面的智能助手，助您在信息时代脱颖而出，做出更明智决策。`;

const tedianContent ='1.多领域分析能力：TechMindWave具备跨多个领域的分析能力，包括图表、文本和问题分析。不论是商业数据、科研论文还是实际问题，它都能从多角度进行深入分析。\n' +
  '2.智能图表解读：该解决方案能自动解读图表中的趋势、模式和关联，帮助用户更好地理解数据，并发现有价值的见解。\n' +
  '3.全面文本理解：TechMindWave能提取文本的关键信息、情感倾向和主题，为用户提供全面的文本理解支持，加速信息获取和处理。\n' +
  '4.自动问题分析：它具备强大的问题分析能力，能自动分析问题并提供准确的答案或解决方案，帮助用户解决各种难题。';
const Welcome: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
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
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <Divider style={{ fontSize: 24, fontWeight: 'bold', color: 'white', backgroundColor: '#333' }}>
            生活照片展示
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
      </Card>
    </PageContainer>
  );
};

export default Welcome;
