<template>
  <div>
    <h1>GitHub Profiles</h1>
    <github-user-profile :name="hootlex"></github-user-profile>
    <github-user-profile :name="hootlex"></github-user-profile>
  </div>
</template>

<script type="ts">
import { Vue, Component } from "vue-property-decorator";
import GitHubProfile from "@/components/GitHubProfile.vue";

@Component({
  components: {
    "github-user-profile": GitHubProfile,
  },
})
export default class ProjectGitHubProfile extends Vue {}
</script>
