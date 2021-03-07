<template>
  <div>
    <p>the count is:</p>
    <button @click="onBtnClick">{{ count }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ClickCounter extends Vue {
  count = 0;

  onBtnClick() {
    this.count++;
  }
}
</script>
