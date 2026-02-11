import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS笔记",
  description: "计算机笔记",
  markdown: {
    math: true,
    lineNumbers: true,
  },




  vite: {
    server: {
//    host: true, // 允许外部访问（0.0.0.0）
      host: '0.0.0.0',
      port: 5172, // 监听 5173 端口
      allowedHosts: [
        'itpoint.cn',       // 允许该域名访问
        'www.itpoint.cn',   // 允许 www 子域名访问
        'localhost',
        '127.0.0.1',
        '180.163.90.244'
      ],
    },
  },


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    // siteTitle: '',
    returnToTopLabel: '返回顶部',
    // footer: {
    //   message: '',
    //   copyright: 'Copyright © 2023-present <a href="https://beian.miit.gov.cn" target="_blank" style="text-decoration: none; color: #67676c;; font-size: 14px;">网站备案：皖ICP备2022012882号</a>'
    // },



    nav: [
      { text: '网址导航', link: '/index' },

      {
        text: '计算机基础',
        items: [
          { text: '算法', link: '/计算机-Algorithms/00.第0章、算法介绍/01.1、算法基本概念与定义.md' },
          { text: '数据结构', link: '/计算机-Data-Structures/00.第零章、数据结构介绍/01.1、数据结构基本概念.md' },
          { text: '计算机网络', link: '/计算机-Network/01.第一章、网络基础概念/01.1、网络基础介绍.md' },
          { text: '数据格式', link: '/计算机-数据格式/01.1、JSON-现代Web开发基石.md' },
          { text: '编程指南', link: '/计算机-编程指南/01.编程语言解析/01.1、Java语言全面解析指南.md' },
          { text: '编程思想', link: '/计算机-编程思想/01.第一章、编程基础/01.1、计算思维本质.md' },
          { text: '编程范式', link: '/计算机-编程范式/01.第一章、基础认知与方法论/01.1、编程范式全景图与学习路径.md' },
        ]
      },

  
      {
        text: '数学',
        items: [
          { text: '数学思想', link: '/数学-Mathematical-Thinking/01.第一章、数学思想/01.1、基础认知类思想.md' },
          { text: '数学基础', link: '/数学-Mathematics-Basic/01.第一章、集合与函数/01.1、实数.md' },
          { text: '高数上册', link: '/数学-Mathematics-A/01.第一章、极限与连续/01.1数列及其极限.md' },
          { text: '高数下册', link: '/数学-Mathematics-B/01.第一章、空间解析几何与向量代数/01.1、空间直角坐标系.md' },
          { text: '线性代数', link: '/数学-Linear-Algebra/01.第一章、行列式/01.1、行列式的定义.md' },
        ]
      },

      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/前端-Html/01.第一章、HTML简介/01.1、HTML是什么.md' },
          { text: 'CSS', link: '/前端-Css/01.第一章、CSS入门基础/01.1、CSS怎么写和怎么用.md' },
          { text: 'JavaScript', link: '/前端-JavaScript/01.第一章、JS基础语法/01.1、JS介绍与基础使用.md' },
          { text: 'JQuery', link: '/前端-JQuery/01.第一章、jQuery基础语法与引入/01.1、jQuery介绍与引入方式.md' },
          { text: 'BootsStrap', link: '/前端-BootStrap/01.第一章、Bootstrap快速入门/01.1、Bootstrap安装与项目搭建.md' },
          { text: 'TypeScript', link: '/前端-TypeScript/01.第一章、TypeScript介绍与基础类型/01.1、TypeScript介绍与入门.md' },
          { text: 'NodeJS', link: '/前端-NodeJs/01.第一章、Node.js 基础入门/01.1、环境搭建与基础概念.md' },
          { text: 'Vue', link: '/前端-Vue/01.第一章、Vue基础入门/01.1、Vue框架入门与项目创建.md' },
          { text: 'React', link: '/前端-React/01.第一章、React起步与项目构建/01.1、React是什么与核心特性.md' },
        ]
      },

      {
        text: '后端',
        items: [
          { text: 'JavaSE', link: '/后端-JavaSE/01.第一章、Java基础/01.1、java入门.md' },
          { text: 'JavaWeb', link: '/后端-JavaWeb/01.第一篇、JSP技术/01.第一章、JSP基础与工作原理/01.1、JSP概念入门.md' },
          { text: 'JavaFrameworks', link: '/后端-JavaFrameworks/01.第一篇、 Java框架基础/01.第一章、框架概述与演进历史/01.1、框架定义与本质.md' },
          { text: 'JavaMicroservices', link: '/后端-JavaMicroservices/01.第一篇、Java微服务架构基础/01.第一章、微服务架构基础/01.1、微服务定义与核心特征.md' },
          { text: 'PythonCore', link: '/后端-PythonCore/01.第一章、Python基础入门/01.1、Python学习与知识体系概览.md' },
        ]
      },
      
      {
        text: '数据库',
        items: [
          { text: 'Mysql', link: '/数据库-MySQL/01.第一篇、基础入门篇/01.第一章、MySQL概述与架构原理/01.1、MySQL发展历史与版本演进.md' },
          { text: 'Redis', link: '/数据库-Redis/01.第一章、Redis基础入门/01.1、Redis基础入门.md' },
          { text: 'Elasticsearch', link: '/数据库-Elasticsearch/01.第一篇、Elasticsearch/01.第一章、基础入门与核心概念/01.1、发展历程与生态概述.md' },
        ]
      },

      {
        text: '中间件',
        items: [
          { text: 'kafka', link: '/中间件-Kafka/01.第一章、Kafka 认知基础/01.1、消息系统理论基础.md' },
          { text: 'RabbitMQ', link: '/中间件-RabbitMQ/01.第一章、理论基础篇/01.1、消息队列概念与发展历程.md' },
          { text: 'Nginx', link: '/中间件-Nginx/01.第一章、Nginx基础概念/01.1、nginx-概念架构.md' },
          { text: 'Zookeeper', link: '/中间件-Zookeeper/01.第一章、Zookeeper基础入门/01.1、分布式协调服务概述.md' },
        ]
      },

      {
        text: '运维',
        items: [
          { text: 'Linux', link: '/运维-Linux/01.第一篇、Linux系统基础与认知/01.第一章、计算机基础与预备知识/01.1、计算机硬件体系结构.md' },
          { text: 'Shell', link: '/运维-Shell/01.第一章、Shell 基础认知/01.1、shell介绍.md' },
          { text: 'Ansible', link: '/运维-Ansible/01.第一章、Ansible 概念与环境/01.1、ansible-核心概念.md' },
          { text: 'Docker', link: '/运维-Docker/01.第一章、Docker入门基础/01.1、Docker核心概念.md' },
          { text: 'Kubernetes', link: '/运维-Kubernetes/01.第一章、基础架构/01.1、容器编排概念入门.md' },
          { text: 'Grafana', link: '/运维-Grafana/01.第一章、基础概念入门/01.1、grafana-概念架构.md' },
          { text: 'Prometheus', link: '/运维-Prometheus/01.第一章、基础理论与架构/01.1、监控理论基础.md' },
          { text: 'Zabbix', link: '/运维-Zabbix/01.第一章、监控基础与Zabbix概述/01.1、监控系统-基础概念.md' },
        ]
      },


      {
        text: '安全技术',
        items: [
          { text: '加密技术', link: '/安全-加密技术/01.第一章、密码学基础概念/01.1、加密基础概念与术语解释.md' },
          { text: '认证技术', link: '/安全-认证技术/01.第一章、认证授权基础概念/01.1、认证授权核心概念.md' },
          { text: '通信安全', link: '/安全-通信安全/01.第一章、传输层通信安全/01.1、HTTPS与TLS加密通信机制.md' },
          { text: '网络攻击', link: '/安全-网络攻击/01.第一章、网络安全基础/01.1、网络安全基础概念.md' },
        ]
      },

      {
        text: '通信技术',
        items: [
          { text: '原生Ajax', link: '/通信-原生Ajax/01.第一章、Ajax基础认知篇/01.1、Ajax概念与作用.md' },
          { text: 'JQueryAjax', link: '/通信-JQueryAjax/01.第一章、jQuery Ajax基础认知/01.1、jQuery Ajax概念入门.md' },
          { text: 'FetchApi', link: '/通信-FetchApi/01.第一章、FetchAPI入门/01.1、Fetch API概念与优势.md' },
          { text: 'Axios', link: '/通信-Axios/01.第一章、Axios基础认知/01.1、Axios概念与特点介绍.md' },
          { text: 'RESTful', link: '/通信-RESTful/01.第一章、RESTful基础理论/01.1、REST基本概念与定义.md' },
          { text: 'RPC', link: '/通信-RPC/01.第一章、RPC基础理论与概念/01.1、RPC概念与本质.md' },
          { text: 'WebSocket', link: '/通信-WebSocket/01.第一章、入门了解/01.1、WebSocket介绍.md' },
          { text: 'gRPC', link: '/通信-gRPC/01.第一章、基础入门/01.1、gRPC基础概念与架构.md' },
          { text: 'GraphQL', link: '/通信-GraphQL/01.第一章、GraphQL基础理解/01.1、GraphQL概念与对比.md' },
          { text: 'SSE', link: '/通信-SSE/01.第一章、SSE基础与核心概念/01.1、SSE技术概述与应用场景.md' },
          { text: '通信协议', link: '/通信-通信协议/01.第一章、网络协议基础/01.1、网络通信基础概念.md' },
        ]
      },


      {
        text: '架构设计',
        items: [
          { text: '23种设计模式', link: '/架构-23 Design Patterns/01.第一章、设计模式基础/01.1、设计模式概述与分类.md' },
        ]
      },

      {
        text: '软件工具',
        items: [
          { text: 'Git', link: '/工具-Git/01.第一章、Git概念与环境准备/01.1、版本控制系统概述.md' },
          { text: 'Maven', link: '/工具-Maven/01.第一章、Maven基础入门/01.1、构建工具概述与对比.md' },
          { text: 'Vite', link: '/工具-Vite/01.第一章、Vite 概念与环境准备/01.1、基础概念与环境准备.md' },
          { text: 'Webpack', link: '/工具-Webpack/01.第一章、Webpack 基础认知与安装/01.1、前端工程化与Webpack概述.md' },
          { text: 'Gitlab-CICD', link: '/工具-GitLab-CICD/01.第一章、基础概念入门/01.1、CI与CD基础概念.md' },
          { text: 'Jenkins-CICD', link: '/工具-Jenkins-CICD/01.第一章、CICD基础与Jenkins概述/01.1、CI与CD基础概念.md' },
          { text: 'MarkDown', link: '/工具-MarkDown/01.一、基础语法.md' },
        ]
      },
    ],


    sidebar: generateSidebar([
      // 中间件 (4个)
      {
        documentRootPath: 'docs/中间件-Zookeeper',
        scanStartPath: '/',
        resolvePath: '/中间件-Zookeeper/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/中间件-RabbitMQ',
        scanStartPath: '/',
        resolvePath: '/中间件-RabbitMQ/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/中间件-Nginx',
        scanStartPath: '/',
        resolvePath: '/中间件-Nginx/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/中间件-Kafka',
        scanStartPath: '/',
        resolvePath: '/中间件-Kafka/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 运维 (8个)
      {
        documentRootPath: 'docs/运维-Zabbix',
        scanStartPath: '/',
        resolvePath: '/运维-Zabbix/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/运维-Shell',
        scanStartPath: '/',
        resolvePath: '/运维-Shell/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/运维-Prometheus',
        scanStartPath: '/',
        resolvePath: '/运维-Prometheus/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/运维-Linux',
        scanStartPath: '/',
        resolvePath: '/运维-Linux/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/运维-Kubernetes',
        scanStartPath: '/',
        resolvePath: '/运维-Kubernetes/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/运维-Grafana',
        scanStartPath: '/',
        resolvePath: '/运维-Grafana/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/运维-Docker',
        scanStartPath: '/',
        resolvePath: '/运维-Docker/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/运维-Ansible',
        scanStartPath: '/',
        resolvePath: '/运维-Ansible/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 通信 (11个)
      {
        documentRootPath: 'docs/通信-原生Ajax',
        scanStartPath: '/',
        resolvePath: '/通信-原生Ajax/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-通信协议',
        scanStartPath: '/',
        resolvePath: '/通信-通信协议/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-WebSocket',
        scanStartPath: '/',
        resolvePath: '/通信-WebSocket/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-SSE',
        scanStartPath: '/',
        resolvePath: '/通信-SSE/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-RPC',
        scanStartPath: '/',
        resolvePath: '/通信-RPC/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-RESTful',
        scanStartPath: '/',
        resolvePath: '/通信-RESTful/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-JQueryAjax',
        scanStartPath: '/',
        resolvePath: '/通信-JQueryAjax/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-gRPC',
        scanStartPath: '/',
        resolvePath: '/通信-gRPC/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-GraphQL',
        scanStartPath: '/',
        resolvePath: '/通信-GraphQL/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-FetchApi',
        scanStartPath: '/',
        resolvePath: '/通信-FetchApi/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/通信-Axios',
        scanStartPath: '/',
        resolvePath: '/通信-Axios/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 数学 (5个)
      {
        documentRootPath: 'docs/数学-Mathematics-Basic',
        scanStartPath: '/',
        resolvePath: '/数学-Mathematics-Basic/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/数学-Mathematics-B',
        scanStartPath: '/',
        resolvePath: '/数学-Mathematics-B/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/数学-Mathematics-A',
        scanStartPath: '/',
        resolvePath: '/数学-Mathematics-A/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/数学-Mathematical-Thinking',
        scanStartPath: '/',
        resolvePath: '/数学-Mathematical-Thinking/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/数学-Linear-Algebra',
        scanStartPath: '/',
        resolvePath: '/数学-Linear-Algebra/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 数据库 (3个)
      {
        documentRootPath: 'docs/数据库-Redis',
        scanStartPath: '/',
        resolvePath: '/数据库-Redis/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/数据库-MySQL',
        scanStartPath: '/',
        resolvePath: '/数据库-MySQL/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/数据库-Elasticsearch',
        scanStartPath: '/',
        resolvePath: '/数据库-Elasticsearch/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 前端 (9个)
      {
        documentRootPath: 'docs/前端-Vue',
        scanStartPath: '/',
        resolvePath: '/前端-Vue/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-TypeScript',
        scanStartPath: '/',
        resolvePath: '/前端-TypeScript/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-React',
        scanStartPath: '/',
        resolvePath: '/前端-React/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-NodeJs',
        scanStartPath: '/',
        resolvePath: '/前端-NodeJs/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-JQuery',
        scanStartPath: '/',
        resolvePath: '/前端-JQuery/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-JavaScript',
        scanStartPath: '/',
        resolvePath: '/前端-JavaScript/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-Html',
        scanStartPath: '/',
        resolvePath: '/前端-Html/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-Css',
        scanStartPath: '/',
        resolvePath: '/前端-Css/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/前端-BootStrap',
        scanStartPath: '/',
        resolvePath: '/前端-BootStrap/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 架构 (1个)
      {
        documentRootPath: 'docs/架构-23 Design Patterns',
        scanStartPath: '/',
        resolvePath: '/架构-23 Design Patterns/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 计算机 (7个)
      {
        documentRootPath: 'docs/计算机-数据格式',
        scanStartPath: '/',
        resolvePath: '/计算机-数据格式/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/计算机-编程指南',
        scanStartPath: '/',
        resolvePath: '/计算机-编程指南/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/计算机-编程思想',
        scanStartPath: '/',
        resolvePath: '/计算机-编程思想/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/计算机-编程范式',
        scanStartPath: '/',
        resolvePath: '/计算机-编程范式/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/计算机-Network',
        scanStartPath: '/',
        resolvePath: '/计算机-Network/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/计算机-Data-Structures',
        scanStartPath: '/',
        resolvePath: '/计算机-Data-Structures/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/计算机-Algorithms',
        scanStartPath: '/',
        resolvePath: '/计算机-Algorithms/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 后端 (5个)
      {
        documentRootPath: 'docs/后端-PythonCore',
        scanStartPath: '/',
        resolvePath: '/后端-PythonCore/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/后端-JavaWeb',
        scanStartPath: '/',
        resolvePath: '/后端-JavaWeb/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/后端-JavaSE',
        scanStartPath: '/',
        resolvePath: '/后端-JavaSE/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/后端-JavaMicroservices',
        scanStartPath: '/',
        resolvePath: '/后端-JavaMicroservices/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/后端-JavaFrameworks',
        scanStartPath: '/',
        resolvePath: '/后端-JavaFrameworks/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 工具 (7个) - 注意有个拼写错误 I具 应该是 工具
      {
        documentRootPath: 'docs/工具-Webpack',
        scanStartPath: '/',
        resolvePath: '/工具-Webpack/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/工具-Vite',
        scanStartPath: '/',
        resolvePath: '/工具-Vite/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/工具-Maven',
        scanStartPath: '/',
        resolvePath: '/工具-Maven/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/工具-MarkDown',
        scanStartPath: '/',
        resolvePath: '/工具-MarkDown/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/工具-Jenkins-CICD',
        scanStartPath: '/',
        resolvePath: '/工具-Jenkins-CICD/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/工具-GitLab-CICD',
        scanStartPath: '/',
        resolvePath: '/工具-GitLab-CICD/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/工具-Git',
        scanStartPath: '/',
        resolvePath: '/工具-Git/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      // 安全 (4个)
      {
        documentRootPath: 'docs/安全-网络攻击',
        scanStartPath: '/',
        resolvePath: '/安全-网络攻击/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/安全-通信安全',
        scanStartPath: '/',
        resolvePath: '/安全-通信安全/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/安全-认证技术',
        scanStartPath: '/',
        resolvePath: '/安全-认证技术/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      },
      {
        documentRootPath: 'docs/安全-加密技术',
        scanStartPath: '/',
        resolvePath: '/安全-加密技术/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: false,
        collapsed: false
      }
    ])

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

})

