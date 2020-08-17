##mate标签解释
`<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">`
1.  width=device-width（让 viewport 尺寸等于逻辑像素尺寸）
##viewport
定义：移动浏览器网页的虚拟绘制窗口
---
出现由来：viewport一般比屏幕（逻辑像素）大，未作移动端适应的网页（以前老网页比如诺基亚时代网页），可以的通过平移和缩放来显示网页全部
现在：width=device-width，然后做自适应

##自适应正在做什么
逻辑像素就是css像素
逻辑像素本身相当于已经是自带了响应缩放效果。所以说面向逻辑像素开发，实际上是很易用的，而且应该是兼容性相当不错的一种方案。
我们移动端自适应适应的不是不同dpr，而是不同大小屏幕，比如375（iphone）、414(iphone6s)，显示一样（同比例缩放或放大）