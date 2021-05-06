#### css3 五大布局

- 静态布局
- 自适应布局
- 流式布局 百分比布局
- 响应式布局 媒体查询
- 弹性布局 rem/em/flex 布局

#### flex

- flex: 0 1 auto 默认值
- flex: 1 1 auto auto
- flex: 0 0 auto auto
- flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。
- flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。flex-shrink 属性为 0,空间不足时，项目不缩小。
- flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。它的默认值为 auto，即项目的本来大小。

<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
<https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex>

#### css 盒模型 box-sizing

- width,height,border,padding

- content-box 默认值，标准盒子模型

  - total = border + 2 _ padding + 2 _ content
  - content box width = width
  - content box height = height

- border-box

  - total = width height
  - content box width = width - 2 _ border - 2 _ padding
  - content box height = height - 2 _ border - 2 _ padding

- border-box 不包含 margin

![css 盒模型](/clipboard-css.png)
