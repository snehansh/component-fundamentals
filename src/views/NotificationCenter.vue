<template>
  <div>
    <h1>Notification Center</h1>
    <notification-alert
      v-for="(message, index) in messages"
      :key="index"
      :type="message.type"
      :header="message.header"
      class="m-2"
    >
      <template #body>
        <span v-html="message.message"></span>
      </template>
    </notification-alert>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NotificationAlert from "@/components/NotificationAlert.vue";
@Component({
  components: {
    "notification-alert": NotificationAlert,
  },
})
export default class NotificationCenter extends Vue {
  messages = [
    {
      type: "danger",
      header: "Oh no!",
      message: `<p>Your flight has been <b>canceled!</b></p>`,
    },
    {
      type: "success",
      header: "Oh yeah!",
      message: `<p>Your flight is on time</p>`,
    },
    {
      message: `<p>Good Morning</p>`,
    },
  ];
}
</script>
