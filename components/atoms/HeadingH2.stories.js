// Viewをインポート
import HeadingH2 from './HeadingH2.vue'

// Storybookで表示される内容
export default {
  title: 'Components/atoms/HeadingH2', // ディレクトリ
  component: 'HeadingH2' // コンポーネント名
}

const Template = (args, { argTypes }) => ({
  components: { HeadingH2 }, // 上記のコンポーネントと揃える
  props: Object.keys(argTypes),
  // templateで、下記の場合titleとclassNameに任意の値が入る
  template: "<HeadingH2 :title='title' :className='className' />"
})

// 1つ目のデザイン
export const Primary = Template.bind({})
Primary.args = { title: '見出し2です', className: 'el-lv2Heading' }
Primary.storyName = '見出し2デザイン①'

// 2つ目のデザイン
export const Secondary = Template.bind({})
Secondary.args = { title: '見出し2です', className: 'el-lv2Heading-2' }
Secondary.storyName = '見出し2デザイン②'
