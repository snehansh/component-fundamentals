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

<script type="ts">
import { Component, Vue } from "vue-property-decorator";
// import Plan from "@/components/Plan.vue";
import PlanPickerItem from "@/components/PlanPickerItem.vue";
@Component({
  components: {
    // plan: Plan,
    // 'plan-item': Plan,
    'plan-picker-item': PlanPickerItem,
  },
})
export default class PlanPicker extends Vue {
  plans = ["The Hacker", "The Single", "The Curious", "The Addict"];
  selectedPlan = null;

  selectPlan(plan) {
    this.selectedPlan = plan;
  }
}
</script>
