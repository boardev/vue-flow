# Node Resizer

This is a resizer component for Vue Flow.
It can be used to resize your nodes.

## Installation

```bash
yarn add @vue-flow/node-resizer
  
# or
npm install @vue-flow/node-resizer
```

## Usage

```vue
<script setup>
import { ref } from 'vue'  
import { VueFlow } from '@vue-flow/core'
import initialNodes from './initialNodes'

// some nodes and edges
const nodes = ref(initialNodes)
</script>

<template>
  <VueFlow :nodes="nodes">
    <template #node-custom="nodeProps">
      <CustomNode :data="nodeProps.data"  />
    </template>
  </VueFlow>
</template>
```

```vue
<script lang="ts" setup>
import { Handle, Position } from '@vue-flow/core'
import { NodeResizer } from '@vue-flow/node-resizer'

// make sure to include the necessary styles!
import '@vue-flow/node-resizer/dist/style.css'

defineProps(['data'])
</script>

<template>
  <NodeResizer min-width="100" min-height="30" />

  <Handle type="target" :position="Position.Left" />
  <Handle type="source" :position="Position.Right" />
</template>
```


When enabled, these props allow you to pan on drag and zoom on scroll using the MiniMap.

## [Props](/typedocs/interfaces/NodeResizerProps)

| Name            | Definition                                                | Type          | Optional | Default              |
|-----------------|-----------------------------------------------------------|---------------|----------|----------------------|
| nodeId          | Node to attach the resizer to                             | string        | true     | Node id from context |
| color           | Color of the resizer lines                                | string        | true     | -                    |
| handleClassName | Extra class for the resize handle                         | string        | true     | -                    |
| handleStyle     | Additional styles for the resize handle                   | CSSProperties | true     | -                    |
| lineClassName   | Extra class for the resize lines                          | number        | true     | -                    |
| lineStyle       | Additional styles for the resize lines                    | string        | true     | -                    |
| isVisible       | Force visibility of resizer                               | boolean       | true     | true                 |
| minWidth        | Min width of the resizer (can't resize below this value)  | number        | true     | -                    |
| minHeight       | Min height of the resizer (can't resize below this value) | number        | true     | -                    |

## [Emits](/typedocs/interfaces/NodeResizerEmits)

| Name          |
|---------------|
| resizeStart   |
| resize        |
| resizeEnd     |
