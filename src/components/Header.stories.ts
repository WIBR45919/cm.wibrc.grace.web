import HomeComponent from "@/components/HomeComponent.vue";

export default {
  title: "Structure/header",
  component: HomeComponent,
};

const Template = () => ({
  components: { HomeComponent },

  setup() {
    return {};
  },

  template: "<HomeComponent />",
});

export const homeInstance = Template.bind({});
