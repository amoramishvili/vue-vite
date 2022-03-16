import { defineRule } from "vee-validate";

defineRule("required", (value: string) => {
  if (!value || !value.length) {
    return "აღნიშნული ველის შევსება აუცილებელია";
  }
  return true;
});

defineRule("email", (value: string) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    )
  ) {
    return "ელ-ფოსტის ფორმატი არასწორია";
  }

  return true;
});
