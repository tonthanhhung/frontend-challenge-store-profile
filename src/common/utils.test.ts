import utils from "./utils";

describe("Utils Test Suite", () => {
  it("getFullAddress", () => {
    const actual = utils.getFullAddress({
      city: "HCM",
      district: "District 1",
      address: "123 Pasteur"
    });
    expect(actual).toBe("123 Pasteur, District 1, HCM");
  });
});
