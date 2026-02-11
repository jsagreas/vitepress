import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import BackToTop from './components/BackToTop.vue'
import './style/custom.css' // 引入自定义样式
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 回到顶部按钮（固定底部右侧）
      'layout-bottom': () => [
        h(BackToTop),  // 渲染 BackToTop 组件
        h(
          'div',
          {
            style: `
              text-align: center;
              padding: 20px;
              font-size: 14px;
              color: #67676c;
              border-top: 1px solid #eee;
            `
          },
          [
            h('span', null, 'Copyright © 2023-present '),
            h(
              'a',
              {
                href: 'https://beian.miit.gov.cn',
                target: '_blank',
                style: 'text-decoration: none; color: #67676c;'
              },
              '网站备案：皖ICP备2022012882号'
            )
          ]
        )
      ]
    })
  }
}
