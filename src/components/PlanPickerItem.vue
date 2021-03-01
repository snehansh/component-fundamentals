<template>
  <div class="plan" @click="select" :class="itemSelected">
    <div class="description">
      <span class="title"> {{ name }} </span>
    </div>
  </div>
</template>

<script type="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
@Component
export default class PlanPickerItem extends Vue {
  @Prop() name; // unable to annotate
  @Prop() selectedPlan;
  // selected = false;

  // @Emit('hi-there')
  @Emit()
  select() {
    // this.$emit("hi-there");
    // this.$emit('select', this.name)
    // this.selected = true;

    return this.name;
  }

  // get itemSelected() {
  //   return {
  //     "active-plan": this.selected,
  //   };
  // }

  get itemSelected() {
    return {
      "active-plan": this.isSelected,
    };
  }

  get isSelected() {
    return this.name === this.selectedPlan;
  }
}
</script>
