<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { NodeWrapper } from '../../components'
import { useVueFlow } from '../../composables'
import { useNodesInitialized } from '../../composables/useNodesInitialized'

const { getNodes, updateNodeDimensions, emits } = useVueFlow()

const nodesInitialized = useNodesInitialized()

const resizeObserver = ref<ResizeObserver>()

watch(
  nodesInitialized,
  (isInit) => {
    if (isInit) {
      nextTick(() => {
        emits.nodesInitialized(getNodes.value)
      })
    }
  },
  { immediate: true },
)

onMounted(() => {
  resizeObserver.value = new ResizeObserver((entries) => {
    const updates = entries.map((entry) => {
      const id = entry.target.getAttribute('data-id') as string

      return {
        id,
        nodeElement: entry.target as HTMLDivElement,
        forceUpdate: true,
      }
    })

    nextTick(() => updateNodeDimensions(updates))
  })
})

onBeforeUnmount(() => resizeObserver.value?.disconnect())
</script>

<script lang="ts">
export default {
  name: 'Nodes',
  compatConfig: { MODE: 3 },
}
</script>

<template>
  <div class="vue-flow__nodes vue-flow__container">
    <template v-if="resizeObserver">
      <NodeWrapper v-for="node of getNodes" :id="node.id" :key="node.id" v-memo="[node.id]" :resize-observer="resizeObserver" />
    </template>
  </div>
</template>
