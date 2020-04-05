import {hello} from "../src/index";

test("Testing 'hello' function", () => {
  expect(hello("Kuba")).toBe("Hello Kuba");
});
