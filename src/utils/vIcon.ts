import { ref, defineComponent } from "vue";
import dislike from "../../assets/icons/dislike.svg";
export default defineComponent({
  template: `<div class='svg-component'>
                <component v-if='name' :is='name'></component>
            </div>`,
  props: {
    name: {
      default: "",
      type: String,
    },
  },
  components: {
    dislike,
  },
  setup({ name }) {
    return {
      name,
    };
  },
});
