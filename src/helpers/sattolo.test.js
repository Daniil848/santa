import "@testing-library/jest-dom/extend-expect";

import { sattolo } from "./sattolo";

describe("", () => {
  test("",() => {
    const arr = [1,2,3];
    expect(sattolo(arr)).not.toEqual([1,2,3]);
    expect(sattolo(arr)).not.toEqual([1,3,2]);
    expect(sattolo(arr)).not.toEqual([3,2,1]);
    expect(sattolo(arr)).not.toEqual([2,1,3]);
  });
});