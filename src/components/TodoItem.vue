<template>
  <div>
    <input type="checkbox" v-model="completed" />
    <!-- <slot :class="setCompletedStyle"></slot> -->
    <!--will not work as it exists in the parent scope -->
    <span :class="setCompletedStyle">
      <slot></slot>
    </span>
    <!-- Named slots -->
    <slot name="description"></slot>
    <button>
      <slot name="button-text"> Highlight </slot>
    </button>
  </div>
</template>

<script type="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class TodoItem extends Vue {
  completed = false;
  get setCompletedStyle() {
    return {
      done: this.completed,
    };
  }
}
</script>

<style>
.done {
  color: green;
  text-decoration: line-through;
}
</style>
