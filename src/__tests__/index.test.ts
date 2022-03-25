import { classNames } from "../index";

describe("classNames", () => {
  it("creates class entry from object keys and booleans", () => {
    const text = classNames({
      ref1: true,
      ref2: false,
      ref3: true,
      ref4: true,
    });

    expect(text).toEqual("ref1 ref3 ref4");
  });

  it("creates class entry from string", () => {
    const text = classNames("class1", "class2");

    expect(text).toEqual("class1 class2");
  });

  it("unrolls arrays", () => {
    const text = classNames(["class1", "class2"]);

    expect(text).toEqual("class1 class2");
  });

  it("handles args in any order and combination", () => {
    const text = classNames(
      ["list1", "list2"],
      "string2",
      {
        key1: true,
        key2: true,
        key3: false,
        key4: false,
        key5: true,
      },
      "string1",
      { key6: true, key7: true },
      "string2",
      ["list3"],
    );

    expect(text).toEqual(
      "list1 list2 string2 key1 key2 key5 string1 key6 key7 string2 list3",
    );
  });
});
