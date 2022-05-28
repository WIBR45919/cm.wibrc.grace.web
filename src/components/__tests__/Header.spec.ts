import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest";
import HomeComponent from "@/components/HomeComponent.vue"
describe("HomeComponent", () => {
    const wrapper = mount(HomeComponent);
    it("should exist",  () => {
        expect(wrapper.text()).contain("Header component");
    });
});