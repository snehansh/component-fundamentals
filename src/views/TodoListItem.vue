<template>
  <div>
    <h1>Vue.js Slots Fundamentals</h1>
    <!-- <todo-item> Buy Bananas </todo-item>
    <todo-item> Eat Bananas </todo-item>
    <todo-item> Celebrate </todo-item> -->

    <!-- mutliple elements within slot -->
    <!-- <todo-item>
      <p>Buy Bananas</p>
      <button>hello</button>
    </todo-item> -->

    <todo-item>
      Buy Bananas

      <template #description>
        <p>Bananas are good for your health.</p>
      </template>

      <template #button-text> Make it rain </template>
    </todo-item>

    <todo-item>
      Buy Bananas

      <template #description>
        <p>Bananas are good for your health.</p>
      </template>
    </todo-item>
  </div>
</template>

<script type="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "@/components/TodoItem";
@Component({
  components: {
    "todo-item": TodoItem,
  },
})
export default class TodoListItem extends Vue {}
</script>
