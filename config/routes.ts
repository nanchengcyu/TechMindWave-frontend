export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', name: '登录', component: './UserCenter/Login' },
      { path: '/user/register', name: '注册', component: './UserCenter/Register' },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '首页', icon: 'HomeTwoTone', component: './Welcome' },

  {
    path: '/chart',
    name: '智能图表',
    icon: 'PieChartTwoTone',
    routes: [
      { path: '/chart/add_chart',icon: 'PieChartTwoTone', name: '智能分析图表（同步）',component: './Chart/AddChart' },
      { path: '/chart/add_chart_async', icon: 'PieChartTwoTone',name: '智能分析图表（异步）', component: './Chart/AsyncAddChart' },
      { component: './404' },
    ],
  },

  { path: '/essay', name: '智能文章', icon: 'FileWordTwoTone', component: './Essay' },
  { path: '/answer', name: '智能问答', icon: 'BulbTwoTone', component: './Answer' },
  {
    path: '/manage',
    name: '管理中心',
    icon: 'FolderOpenTwoTone',
    routes: [
      { path: '/manage/chart_manage', name: '图表管理',component: './Manage/ChartManage' },
      { path: '/manage/essay_manage', name: '文章管理',component: './Manage/EssayManage' },
      { path: '/manage/answer_manage', name: '问答管理',component: './Manage/AnswerManage' },
      { component: './404' },
    ],
  },

  { path: '/viewChartData/:id', icon: 'checkCircle', component: './ViewChartData', name: '查看图表', hideInMenu: true,  },

  {
    path: '/person',
    icon: 'icon-yonghu',
    name: "个人中心",
    routes: [
      { path: '/person/user_info', name: '个人信息', component: './UserCenter/UserInfo/' },
      { path: '/person/order',  name: '个人订单',component: './UserCenter/UserOrder' },
      { path: '/person/pay_order',  name: '订单付款',component: './UserCenter/UserPayOrder' },
      { path: '/person/payInfo',  name: '支付信息查询',component: './UserCenter/UserPayInfo' },
    ],
  },
  {
    path: '/admin',
    icon: 'icon-guanliyuan',
    name: '系统管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/index', name: '管理员身份介绍', component: './Admin' },
      { path: '/admin/user_manage', name: '用户管理', component: './Admin/UserManage' },
      { path: '/admin/adduser', name: '添加用户', component: './Admin/AddUser' },
      { path: '/admin/chart_manage', name: '图表管理', component: './Admin/ChartManage' },
      { path: '/admin/essay_manage', name: '文章管理',component: './Admin/EssayManage' },
      { path: '/admin/answer_manage', name: '问答管理', component: './Admin/AnswerManage' },
      { path: '/admin/user_order_manage', name: '订单管理', component: './Admin/UserOrderManage' },
      { path: '/admin/user_pay_order_manage', name: '管理员支付订单', component: './Admin/UserPayOrderManage' },
      { path: '/admin/user_pay_info_manage', name: '支付信息结果查询', component: './Admin/UserPayInfoManage' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
