# 消息条

### 介绍

用于向用户显示快速消息。

### 引入

```js
import { createApp } from 'vue'
import { Snackbar } from '@varlet/ui'

createApp().use(Snackbar)
```

### 局部引入

```js
import { Snackbar } from '@varlet/ui'

export default {
  components: {
    [Snackbar.Component.name]: Snackbar
  }
}
```

## 组件调用

### 基本使用

```html
<var-button type="primary" block @click="show = !show">基本使用</var-button>
<var-snackbar v-model:show="show"> 这是一个消息条！！</var-snackbar>
```

```js
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false)

    return {
      show
    }
  }
}
```

### 垂直排列
通过 `vertical` 属性改变 `snackbar` 排列方式，通过 `自定义插槽` 创建右边 action。

```html
<var-snackbar v-model:show="show" :vertical="true">
  这是一个消息条！！
  <template #action>
    <var-button type="primary" @click="show = !show">关闭</var-button>
  </template>
</var-snackbar>
```

### 底部显示

通过 `position` 属性改变 `snackbar` 显示位置。

```html
<var-snackbar v-model:show="show" position="bottom">
  这是一个消息条！！
  <template #action>
    <var-button type="primary" @click="show = false">关闭</var-button>
  </template>
</var-snackbar>
```

### 显示时长

通过 `duration` 属性改变 `snackbar` 显示时长。

```html
<var-snackbar v-model:show="show" :duration="1000"> 这是一个消息条！！</var-snackbar>
```

### 禁止穿透点击

使用 `forbid-click` 控制是否禁止穿透点击。

```html
<var-snackbar v-model:show="show" :forbid-click="true"> 这是一个消息条！！</var-snackbar>
```

## 函数调用

### 基本使用

```javascript
Snackbar('这是一个消息条！！')
```

### 显示时长

```javascript
Snackbar({
 content: '这是一个消息条！！',
 duration: 1000
})
```

### 底部显示

```javascript
Snackbar({
 content: '这是一个消息条！！',
 position: 'bottom'
})
```

### Snackbar 类型

```javascript
Snackbar.success('这是一个消息条！！')
Snackbar.warning('这是一个消息条！！')
Snackbar.info('这是一个消息条！！')
Snackbar.error('这是一个消息条！！')
Snackbar.loading('这是一个消息条！！')
```

### 单例模式

使用函数式调用时，Snackbar 默认采用单例模式，即同一时间只会存在一个 Snackbar，如果需要在同一时间弹出多个 Snackbar，可以参考下面的示例

```javascript
Snackbar.allowMultiple(true)

const snackbar1 = Snackbar('第一个 Snackbar');
const snackbar1 = Snackbar.success('第二个 Snackbar');

snackbar1.clear();
snackbar1.clear();
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `v-model:show` | 是否显示 `Snackbar` | _boolean_ | `false` |
| `type`| `Snackbar` 类型，可选值为 `success warning info error loading` | _string_ | `-` |
| `position`| `Snackbar`  位置，可选值为 `top center bottom` | _string_ | `top` |
| `duration`| 显示时长 | _number_ | `3000` |
| `content` | 自定义内容 | _string_ | `-` |
| `content-class` | 自定义内容的类名 | _string_ | `-` |
| `vertical` | 是否启用竖直排列方式 | _boolean_ | `false` |
| `loading-type` | 加载动画类型(见 `Loading` 组件) | _string_ | `circle` |
| `loading-size` | 加载动画大小(见 `Loading` 组件) | _string_ | `normal` |
| `lock-scroll`| 是否禁止滚动穿透 | _boolean_  | `false` |
| `forbid-click`| 是否禁止穿透点击 | _boolean_  | `false` |
| `teleport`| 弹出层挂载的位置 | _TeleportProps['to']_  | `body` |

### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------- | -------- |
| `open` | 	打开 `Snackbar` 时触发 | `-` |
| `opened` | 	打开 `Snackbar` 动画结束时触发 | `-` |
| `close` | 	关闭 `Snackbar` 时触发 | `-` |
| `closed` | 	关闭 `Snackbar` 动画结束时触发 | `-` |

### 插槽

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| `default` | `Snackbar` 内容 | `-` |
| `action` | `Snackbar` 右边动作区 | `-` |

### 方法

实例上的 `clear` 方法可关闭当前实例，全局 `clear` 方法可关闭所有的消息条。

| 方法名 | 说明 | 参数 | 返回值 |
| ---- | ---- | ---- | ---- |
| `Snackbar` | 显示消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.success` | 显示成功消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.info` | 显示普通消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.warning` | 显示警告消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.error` | 显示错误消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.loading` | 显示加载消息条 | _options \| string_ | `snackbar 实例` |
| `Snackbar.clear` | 关闭消息条 | _-_ | `-` |
| `Snackbar.allowMultiple` | 是否允许多例模式 | _boolean_ | `-` |

### Snackbar Options

#### 函数式调用时传入的选项

| 参数 | 说明 | 类型 | 默认值 |
| ----- | -------------- | -------- | ---------- |
| `show` | 是否显示 `Snackbar` | _boolean_ | `false` |
| `type`| `Snackbar` 类型，可选值为 `success warning info error loading` | _string_ | `-` |
| `position`| `Snackbar` 位置，可选值为 `top center bottom` | _string_ | `top` |
| `duration`| 显示时长(当 `type` 属性为 `loading` 时，需要手动关闭) | _number_ | `3000` |
| `content` | 自定义内容 | _string_ | `-` |
| `contentClass` | 自定义内容的类名 | _string_ | `-` |
| `vertical` | 是否启用竖直排列方式 | _boolean_ | `false` |
| `loadingType` | 加载动画类型(见 `Loading` 组件) | _string_ | `circle` |
| `loadingSize` | 加载动画大小(见 `Loading` 组件) | _string_ | `normal` |
| `lockScroll`| 是否禁止滚动穿透 | _boolean_  | `false` |
| `forbidClick`| 是否禁止穿透点击(当 `type` 属性为 `loading` 时，默认为 `true`) | _boolean_  | `false` |
| `onOpen` | 	打开 `Snackbar` 时触发 | _() => void_ | `-` |
| `onOpened` | 	打开 `Snackbar` 动画结束时触发 | _() => void_ | `-` |
| `onClose` | 	关闭 `Snackbar` 时触发 | _() => void_ | `-` |
| `onClosed` | 	关闭 `Snackbar` 动画结束时触发 | _() => void_ | `-` |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--snackbar-width` | `256px` |
| `--snackbar-color` | `rgba(255, 255, 255, .87)` |
| `--snackbar-border-radius` | `4px` |
| `--snackbar-background` | `#333` |
| `--snackbar-font-size` | `var(--font-size-md)` |
| `--snackbar-margin` | `6px 24px` |
| `--snackbar-border-color` | `currentColor` |
| `--snackbar-success-background` | `var(--color-success)` |
| `--snackbar-info-background` | `var(--color-info)` |
| `--snackbar-error-background` | `var(--color-danger)` |
| `--snackbar-warning-background` | `var(--color-warning)` |
| `--snackbar-content-padding` | `14px 16px` |
| `--snackbar-action-margin` | `0 16px 0 0` |
