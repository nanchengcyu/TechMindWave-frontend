相关笔记链接🔗
知识星球：https://bcdh.yuque.com/staff-wpxfif/resource/oywzglpnxegf579a
猫十二：https://www.yuque.com/kcsshier/zpovmy/frhxvidgief5r5df?singleDoc
上传前后端代码教程
相关链接🔗：
https://zhuanlan.zhihu.com/p/193140870
前端代码：
https://github.com/nanchengcyu/TechMindWave-frontend
后端代码：
https://github.com/nanchengcyu/TechMindWave-backend

1）在GitHub上创建仓库




2）建立本地仓库


3） 将所有文件添加到仓库中
 git add  .
4）修改文件描述
git commit -m "first commit"
5）关联github仓库
git branch -M main
git remote add origin git@github.com:nanchengcyu/TechMindWave-frontend.git
6）上传本地代码
git push -u origin main
项目背景
什么是 BI？

即商业智能：数据可视化、报表可视化系统
主流 BI 平台：帆软 BI、小马 BI、微软 Power BI



传统 BI 平台：
https://chartcube.alipay.com/
1需要人工上传数据
2需要人工拖选分析要用到的数据行和列（数据分析师）
3需要人工选择图表类型（数据分析师）
4生成图表并保存配置

智能 BI 平台：
区别于传统的 BI，用户（数据分析者）只需要导入最最最原始的数据集，输入想要进行分析的目标（比如帮我分析一下网站的增长趋势），就能利用 AI 自动生成一个符合要求的图表以及结论。


优点：让不会数据分析的同学也能通过输入目标快速完成数据分析，大幅节约人力成本。
会用到 AI 接口



需求分析

1智能分析：用户输入目标和原始数据（图表类型），可以自动生成图表和分析结论
2图表管理
3图表生成的异步化（消息队列）
4对接 AI 能力

架构图

基础流程：

优化流程（异步化）：





技术栈

前端
1.React
2.Umi
3.Ant Design Pro
4.可视化开发库：Echarts √ 、HighChairts + AntV
5.umi openapi 代码生成：自动生成后端调用代码
6.EChart 图表生成

后端
1.Spring Boot：万用模板
2.MySQL数据库
3.Redis：Redissson限流控制
4.MyBatis Plus 数据库访问结构
5.消息队列：RabbitMQ
6.AI能力：Open AI接口开发
7.Excel上传和数据的解析：Easy Excel
8.Swagger + Knife4j 项目文档
9.Hutool 工具库

 
平台功能介绍
1. 用户登录，注册。
2. 智能图表分析（同步）。调用AI根据用户上传csv文件生成对应的 JSON 数据，并使用 ECharts图表 将分析结果可视化展示。
3. 智能图表分析（异步）。使用了线程池异步生成图表，最后将线程池改造成使用 RabbitMQ消息队列 保证消息的可靠性，实现消息重试机制。
4. 智能文本分析（异步）。使用了线程池异步生成markdown文本，最后将线程池改造成使用 RabbitMQ消息队列 保证消息的可靠性，实现消息重试机制。
5. 智能问题分析（异步）。使用了线程池异步生成问题解决答案，最后将线程池改造成使用 RabbitMQ消息队列 保证消息的可靠性，实现消息重试机制。
6. 个人管理图表/文本/问题，增删改查。
7. 个人信息管理，头像，名字，账号等的修改。
8. 管理员管理，支持图表/文本/问题增删改查，新增用户，修改用户，删除用户，查看用户，增删改查等。
9. 用户限流。本项目使用到令牌桶限流算法，使用Redisson实现简单且高效分布式限流，限制用户每秒只能调用一次数据分析接口，防止用户恶意占用系统资源
10. 调用AI进行数据分析，并控制AI的输出。
11. 由于AIGC的输入 Token 限制，使用 Easy Excel 解析用户上传的 XLSX 表格数据文件并压缩为CSV，实测提高了20%的单次输入数据量、并节约了成本。
12. 后端自定义 Prompt 预设模板并封装用户输入的数据和分析诉求，通过对接 AIGC 接口生成可视化图表 JSON 配置和分析结论，返回给前端渲染。
平台相关页面截图展示


网站名字
改名了，这是之前版本的名字

我的选择
WiseGraphs：将"Wise"（意为智慧）和"Graphs"（意为图表）结合，强调图表的智能化。
副标题：智能可视化，数据一目了然
前后端相关网站链接
RabbitMQ网站地址：
http://localhost:15672/#/
ant-design 官网镜像地址:
http://ant-design.gitee.io/index-cn
ant-design-pro镜像地址：
http://ant-design-pro.gitee.io/index-cn
antd-mobile镜像地址：
https://antd-mobile.gitee.io/index-cn
前端项目初始化
Install node_modules:
npm install 
OR
yarn
启动项目
npm start
构建项目
npm run dev
前端初始化问题解决
1.依赖缺失解决（主要更改包名后的报错解决方法）




后端项目初始化
1. 下载/拉取本项目到本地
2. 通过 IDEA 代码编辑器进行打开项目，等待依赖的下载
3. 修改配置文件 application.yaml 的信息，比如数据库、Redis、RabbitMQ等
4. 修改信息完成后，通过 NanchengyuApplication 程序进行运行项目
5.  队列生成

部署项目
部署方式
1）原生态部署方法，各种环境利用Linux指令安装（下面所有环境安装方法，MySQL、redis等）
2）docker容器打包方法，将所有的环境打包在docker容器中，包括前后端项目
3）利用第三方网站部署，如宝塔。
阿里云服务器重置以及安装宝塔
链接：
https://blog.csdn.net/qq_44891617/article/details/123723766
宝塔部署参考链接：
https://www.cnblogs.com/galo/p/17539631.html
宝塔 运行jar目录参考

---------------------------------------------------
下面所有方法都为1）的部署方法-原生安装方法
前端
前端打包
webstrom
npm run build 
前端环境
nginx
前端环境安装
nginx下载安装
1）利用centosyum下载
yum 
or 利用官网链接下载 
curl -o  [filename] [curl] 
2)解压安装
tar -zxvf nginx-1.24.0.tar.gz  
3)相关依赖安装
yum install pcre pcre-devel -y
yum install openssl openssl-devel -y
./configure --with-http_ssl_module--with-http_v2_module--with-stream
4）编译安装
make
make install
5）编译配置环境
ls /usr/local/nginx/sbin/nginx
vim /etc/profile
（shift+g）快速跳到编译文件最后一行
在最后一行添加：
export PATH=$PATH:/usr/local/nginx/sbin	
6）启动nginx
source /etc/profile 刷新配置文件
nginx
6）查看端口启动情况
netstat -ntlp 
后端
后端打包
后端多环境运行配置
在企业项目运行时，一般会经历开发-测试等多个环节，因此需要一套代码多个环境，项目上线打包的时候只需要修改application.yml配置即可，详情可看下图
相关链接：
https://zhuanlan.zhihu.com/p/148823337


参考链接：
https://www.cnblogs.com/galo/p/17539631.html

后端环境
Java maven MySQL  Redis RabbitMQ  Java版本
推到重来，建议全部安装利用podman/docker安装
后端环境安装
Java maven安装
yum install -y java-1.8.0-openjdk*
curl -o apache-maven-3.8.5-bin.tar.gz https://dlcdn.apache.org/maven/maven-3/3.8.5/binaries/apache-maven-3.8.5-bin.tar.gz
tar -zxvf apache-maven-3.8.5-bin.tar.gz 
git clone xxx 下载代码
打包构建，跳过测试
mvn package -DskipTests
java -jar ./user-center-backend-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

MySQL安装
参考网站链接：
https://blog.csdn.net/wangpaiblog/article/details/120259448
MySQL镜像网：
https://mirrors.aliyun.com/mysql/MySQL-8.0/?spm=a2c6h.25603864.0.0.6a2f712bwfBnNT
RabbitMQ安装
参考网站 
https://blog.csdn.net/qq_45173404/article/details/116429302
下载网站
https://www.rabbitmq.com/download.html
问题解决方案
rabbitmq用户管理(Not management user问题解决)
参考链接：https://blog.csdn.net/qq_24095055/article/details/97001679
建议最后执行
rabbitmqctl set_user_tags 用户名 administrator

redis安装
参考网站链接：
https://blog.csdn.net/m0_37959155/article/details/108897863
https://blog.csdn.net/u012723183/article/details/105970244（阿里云推荐）
推到重来，建议全部安装利用podman/docker安装


问题复盘
在项目中，遇到的相关问题解决方案记录。
报错解决方案
1.推荐先去问ChatGPT,可以解决百分之80的问题（建立在你的表述无误的情况下） 
2.浏览器搜索方法（推荐顺序谷歌>百度）
3.开源项目可以去GitHub解决

1）动态SQL获取   视频时间1.43.30
2）前端我的图表显示不出来 回放 第四期

后端原因没有解决好
3）异步页面处理
视频在第五期 2.2.30
4）mq队列
视频第七期 2.31.08
对应包 bizmq
5）修改接口




6)更改前端代码openapi接口


7）Redis高版本下载
https://blog.csdn.net/dwh19992018/article/details/129750566
8)更改前端图标

app.tsx文件

defaultSetting文件

9）引入mybaits-plus √
用户中心第一期 项目视频 1.58.42
10）引入junit -单元测试库 √
用户中心第一期 视频 2.15.29
11)注册 id
用户中心终 视频 0.53.00

12）mq队列
BI第七期 1.52.0
13）运行npm install 时，卡在sill install loadAllDepsIntoIdealTree不动
相关链接https://blog.csdn.net/zjq_1234/article/details/88946863

1. npm install一直停留在fetchMetadata: sill mapToRegistry uri http://registry.npmjs.org/whatwg-fetch可以使用如下命令设置为淘宝的镜像源：
npm config set registry https://registry.npm.taobao.org
2. 使用如下命令检验是否成功：
npm config get registry
输出淘宝镜像路径
3. 继续运行 npm install ,安装过程畅通无阻
14）erro报错

这个报错是由于在RabbitMQ中的队列参数不匹配导致的。错误信息中提到了问题所在：

inequivalent arg 'x-dead-letter-exchange' for queue 'ai_question_queue' in vhost '/': received none but current is the value 'ai-dlx-exchange' of type 'longstr'

这个错误表示在队列 ai_question_queue 的参数 x-dead-letter-exchange 不匹配，当前值是 'ai-dlx-exchange'，但接收到的值是 none。这可能是因为队列在声明的时候参数设置不一致导致的。

要解决这个问题，你需要确保你的队列声明参数与之前定义的参数一致。具体来说，检查队列 ai_question_queue 的声明，并确保在声明时设置了正确的 x-dead-letter-exchange 参数。

如果你使用代码声明队列，可以类似以下方式来设置参数：

Map<String, Object> args = new HashMap<>();
args.put("x-dead-letter-exchange", "ai-dlx-exchange"); // 设置正确的死信交换机
Queue queue = new Queue("ai_question_queue", true, false, false, args);

如果你在 RabbitMQ 的管理界面中手动创建队列，确保在队列的参数设置中包含了正确的 x-dead-letter-exchange 值。

总之，解决这个问题的关键是确保队列参数的一致性，特别是 x-dead-letter-exchange 参数的设置。
15）查询电脑端口占用情况命令
netsh interface ipv4 show excludedportrange protocol=tcp

16）页面颜色
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ background: '#007BFF', padding: '5px 10px', borderRadius: '4px', display: 'inline-block' }}>
    <Divider style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>分析结论</Divider>
  </div>
</div>
我的选择#007BFF

/* 背景色为淡蓝色 */
body {
  background-color: #E6F7FF;
}

/* 正文文本颜色为深灰色 */
body {
  color: #333;
}

/* 链接颜色为浅蓝色，悬停时变为深蓝色 */
a {
  color: #007BFF;
}
a:hover {
  color: #0056b3;
}

/* 按钮背景色为浅绿色，文本颜色为白色 */
.button {
  background-color: #A7E1B1;
  color: white;
}

/* 提示框背景色为淡黄色，文本颜色为深灰色 */
.tooltip {
  background-color: #FFF3D9;
  color: #333;
}


17)宝塔部署vue项目刷新404解决方案
解决方案链接：
https://blog.csdn.net/Mrzhao5788/article/details/120279306
18）linux解压时报错： gzip: stdin: not in gzip format tar: Child returned status 1 tar: Error exit delayed
参考链接：
https://blog.csdn.net/hjing123/article/details/88862650
去掉 z
#tar -vxf [解压文件名】
idea快捷操作小技巧
在idea中如何进行单词的全局替换
先按ctrl+f再按ctrl+r
全局替换 crtl+shift+r
在idea中创建测试类快捷键 ctrl+shift+t  --> create new test
windows区域截图快捷键 win 键+ shift + s键 
