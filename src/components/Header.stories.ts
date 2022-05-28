import HeaderComponent from "@/components/HomeComponent.vue";

export default {
  title: "Structure/header",
  component: HeaderComponent,
};

const Template = () => ({
  components: { HeaderComponent },

  setup() {
    return {};
  },

  template: "<HeaderComponent />",
});

export const headerInstance = Template.bind({});
