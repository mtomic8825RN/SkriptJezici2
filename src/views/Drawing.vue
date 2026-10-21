
<script setup lang="ts">
import { ref } from 'vue'

const selectedColor = ref('#000000')
const selectedTool = ref('')
const pixels = ref(Array(32 * 32).fill('#ffffff'))

function selectTool(tool: string) {
  if (selectedTool.value === tool) {
    selectedTool.value = ''
  } else {
    selectedTool.value = tool
  }
}

function colorPixel(index: number) {
  if (selectedTool.value === 'pencil') {
    pixels.value[index] = selectedColor.value
  }
}
</script>

<template>
  <div class="container py-4">
    <h1>New Drawing</h1>
    <p>Create your own pixel art.</p>

    <div class="row mt-4">
      <div class="col-md-3">
        <h3>Tools</h3>

          <button
            class="btn"
            :class="selectedTool === 'pencil' ? 'btn-danger' : 'btn-primary'"
            @click="selectTool('pencil')"
          >
            Pencil
          </button>

        <div class="mt-3">
          <label for="color" class="form-label">Choose color:</label>
          <input
              id="color"
              type="color"
              class="form-control form-control-color"
              v-model="selectedColor"
          >
        </div>
      </div>

      <div class="col-md-9">
        <h3>Canvas</h3>

          <div
            class="canvas"
            :style="{ cursor: selectedTool === 'pencil' ? 'crosshair' : 'default' }"
          >
          <div
            v-for="(color, index) in pixels"
            :key="index"
            class="pixel"
            :style="{ backgroundColor: color }"
            @click="colorPixel(index)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.canvas {
  display: grid;
  grid-template-columns: repeat(32, 1fr);
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1;
  border: 1px solid #ccc;
}

.pixel {
  border: 1px solid #eee;
}
</style>
