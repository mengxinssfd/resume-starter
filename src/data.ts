import type { Data } from '@/interfaces';
// import avatar from '@/assets/me.jpg';

const data: Data = {
  // 个人信息
  info: {
    name: '厉飞雨',
    gender: '男',
    from: '广州',
    job: '前端工程师',
    education: '本科',
    graduatedSchool: 'xx大学 · xx专业(2014 - 2018)',
    workAt: new Date(2018, 1),
    // avatar,
  },
  // 联系方式
  contact: {
    email: 'xinzon32177@163.com',
    phone: '18xxxxxxxxx',
    github: 'mengxinssfd', // username
    blog: 'https://xiaojiju.com',
  },
  // 技能列表
  skillList: [
    '熟悉计算机基础，熟悉基本的数据结构和算法及常用的设计模式',
    '熟悉 Jest 单元测试技术',
    '熟悉 **Webpack**、Rollup、Vite 等构建工具的常用配置',
    '熟悉原生微信小程序开发',
    '熟悉 ThreeJs',
  ],
  personalAdvantage: [
    '**熟悉 React、Vue，有一定项目架构经验**',
    '熟悉工程化，有生产和开发环境优化经验',
    '懂一点 Nodejs，有丰富实战经验',
  ],
  // 工作经历
  workExperience: [
    {
      name: 'ABC软件开发有限公司',
      job: '前端工程师',
      time: ['2020年7月', '2023年12月'],
      desc: '前端团队 1000 人。产品分小程序、app、pc网站等',
      duty: [
        '负责开发公司核心产品的前端部分，使用React.js构建用户界面，实现了各种功能模块，包括用户管理、数据可视化和报表生成等',
        '与后端团队紧密合作，设计和实现了RESTful API，确保前后端数据交互的可靠性和安全性',
        '带领团队进行代码重构和性能优化，通过代码分割和懒加载等技术，减少了首屏加载时间，提升了用户体验',
        '实施了持续集成和持续部署流程，自动化构建和部署过程，大幅提高了开发效率和代码质量',
        '**获得了公司2022年度优秀团队奖**',
      ],
    },
    {
      name: '123互联网科技有限公司',
      job: '前端开发工程师',
      time: ['2019年3月', '2020年5月'],
      desc: '前端团队 1000 人，主要做搜索系统',
      duty: [
        '协助开发团队进行网站前端开发工作，使用Vue.js开发了多个页面和功能模块，包括登录注册、个人中心和商品展示等',
        '参与了网站性能优化工作，通过代码压缩和图片优化等手段，减少了页面加载时间，提升了用户体验',
        '积极参与团队的代码审查和讨论，学习了团队合作和沟通技巧，提高了解决问题的能力',
        '提出了改进网站用户界面的建议，并得到了团队的认可和采纳',
        '_**获得了公司2019年度优秀实习生奖**_',
      ],
    },
  ],
  // 项目经历
  projectExperience: [
    {
      name: '在线购物商城',
      time: ['2022年12月', '2023年12月'],
      technologyStack: ['React.js', 'Ant Design', 'RESTful API'],
      desc: '这是一个基于Vue.js的在线购物商城，旨在为用户提供便捷的购物体验。我负责开发前端部分，与后端团队密切合作以确保系统的完整性和性能。',
      result: [
        '实现了用户认证和授权功能，包括注册、登录、注销等。',
        '使用Vuex管理全局状态，确保数据的一致性和可靠性。',
        '优化页面加载速度和性能，采用懒加载和代码分割等技术。',
        '实现了购物车功能，用户可以方便地添加、编辑和删除商品。',
        '采用响应式设计，确保在不同设备上的良好展示效果。',
        '设计和实现了用户界面的大部分功能，包括主页、商品列表、购物车等。',
        '优化了页面加载速度，使用户能够更快地浏览和购买商品。',
        '与后端团队紧密合作，确保前后端数据交互的有效性和安全性。',
      ],
    },
    {
      name: '社交媒体管理平台',
      time: ['2022年05月', '2022年12月'],
      technologyStack: [
        'React.js',
        'Redux',
        'Firebase',
        'HTML5',
        'CSS3',
        'JavaScript',
      ],
      desc: '这是一个基于React.js和Firebase的社交媒体管理平台，旨在帮助用户管理其社交媒体内容和互动。我负责开发前端部分，并与设计团队合作确保用户体验一致和友好。',
      result: [
        '实现了用户注册、登录和个人资料管理功能，使用Firebase进行用户身份验证和数据存储。',
        '集成了第三方社交媒体API，用户可以直接在平台上发布和管理内容。',
        '使用Redux管理应用状态，确保组件之间的数据共享和一致性。',
        '响应式设计，确保在各种设备上的良好展示效果。',
        '设计和实现了用户界面的大部分功能，包括登录、个人资料设置、内容发布等。',
        '通过优化页面加载速度和性能，提升了用户体验和满意度。',
        '与后端团队密切合作，确保前后端数据交互的有效性和安全',
      ],
    },
    {
      name: '在线教育平台',
      time: ['2019年3月', '2020年5月'],
      technologyStack: ['React Native', 'RESTful API'],
      desc: '这是一个基于Angular和Node.js的在线教育平台，旨在为学生提供高质量的在线课程和学习资源。我负责开发前端部分，并与后端团队紧密合作以确保系统的稳定性和性能。',
      result: [
        '设计和实现了课程目录、课程详情和学习进度跟踪等核心功能。',
        '使用Angular路由实现了单页面应用程序，提升了用户的浏览体验。',
        '优化了页面加载速度和性能，采用懒加载和代码分割等技术。',
        '采用响应式设计，确保在各种设备上的良好展示效果。',
        '设计和开发了用户界面的大部分功能，包括课程列表、学习进度等。',
        '通过与后端团队的协作，确保了数据的准确性和一致性。',
        '优化了用户体验，提升了用户的满意度和留存率。',
      ],
    },
  ],
  // 个人项目
  personalProject: [
    {
      name: '@tool-pack/react-ui',
      desc: 'React UI 组件库',
      link: 'https://github.com/js-tool-pack/react-ui',
    },
    {
      name: '@tool-pack/types',
      desc: 'Typescript 类型体操工具库',
      link: 'https://github.com/js-tool-pack/types',
    },
    {
      name: '@tool-pack/basic',
      desc: '函数工具库',
      link: 'https://github.com/js-tool-pack/basic',
    },
    {
      name: 'request-template',
      desc: '请求封装库',
      link: 'https://github.com/mengxinssfd/request-template',
    },
  ],
  // 自我评价
  evaluation:
    '**有着多年的前端开发经验，熟练掌握HTML、CSS和JavaScript等前端技术。** 具备良好的团队合作能力和沟通能力，能够与设计师和后端开发人员紧密合作，实现项目的需求。注重学习和技术提升，能够快速适应新技术和工具。',
};

export default data;
