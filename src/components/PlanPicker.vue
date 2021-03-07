<template>
  <div class="plans">
    <!-- <plan -->
    <!-- <plan-item -->
    <plan-picker-item
      v-for="(plan, index) in plans"
      :name="plan"
      :key="index"
      @select="selectPlan"
      :selected-plan="selectedPlan"
    ></plan-picker-item>
    <!-- ></plan-item> -->
    <!-- ></plan> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Plan from "@/components/Plan.vue";
import PlanPickerItem from "@/components/PlanPickerItem.vue";
@Component({
  components: {
    // plan: Plan,
    // 'plan-item': Plan,
    "plan-picker-item": PlanPickerItem,
  },
})
export default class PlanPicker extends Vue {
  plans = ["The Hacker", "The Single", "The Curious", "The Addict"];
  selectedPlan = "";

  selectPlan(plan: string) {
    this.selectedPlan = plan;
  }
}
</script>
