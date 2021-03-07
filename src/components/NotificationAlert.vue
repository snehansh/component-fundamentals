<template>
  <b-alert
    :show="showDismissbleAlert"
    :variant="type"
    dismissible
    @dismissed="showDismissbleAlert = false"
  >
    <h4>{{ header }}</h4>
    <slot name="body">No alert</slot></b-alert
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class NotificationAlert extends Vue {
  @Prop({ default: "primary" }) type!: string;
  @Prop({ default: "Information" }) header!: string;
  showDismissbleAlert = true;
}
</script>
