import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 在页面底部统一插入备案信息
      'layout-bottom': () =>
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
    })
  }
}
