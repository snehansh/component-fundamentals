<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1>Vue.js Components Fundamentals</h1>
    <!-- <click-counter></click-counter>
    <click-counter></click-counter>
    <click-counter></click-counter> -->

    <div id="app" class="container mx-auto py-6">
      <header>
        <div>
          <span id="logo">Liquid Gold Box</span>
        </div>
      </header>

      <div class="content">
        <h1 class="title">Coffee Plans</h1>

        <h2 class="subtitle">
          We travel the world to source the very best single origin coffee for
          you
        </h2>

        <!-- <div class="plans"> -->
        <!-- <div class="plan">
            <div class="description">
              <span class="title"> The Single </span>
            </div>
          </div>
          <div class="plan">
            <div class="description">
              <span class="title"> The Curious </span>
            </div>
          </div>
          <div class="plan">
            <div class="description">
              <span class="title"> The Addict </span>
            </div>
          </div> -->

        <!-- <plan>The Hacker</plan> -->
        <!-- <plan name="The Hacker"></plan>
          <plan name="The Single"></plan>
          <plan name="The Curious"></plan>
          <plan name="The Addict"></plan> -->

        <!-- <plan v-for="(plan, index) in plans" :name="plan" :key="index"></plan> -->
        <!-- </div> -->

        <plan-picker></plan-picker>
        <!-- <plan-picker></plan-picker> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ClickCounter from "@/components/ClickCounter.vue";
import Plan from "@/components/Plan.vue";
import PlanPicker from "@/components/PlanPicker.vue";

@Component({
  components: {
    "click-counter": ClickCounter,
    // plan: Plan,
    "plan-picker": PlanPicker,
  },
})
export default class Home extends Vue {}
</script>
