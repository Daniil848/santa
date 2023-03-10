import "@testing-library/jest-dom/extend-expect";

import { mixUsers } from "./mixUsers";

describe("", () => {
  test("",() => {
    const arr = [1,2,3];
    expect(mixUsers(arr)).not.toEqual([1,2,3]);
    expect(mixUsers(arr)).not.toEqual([1,3,2]);
    expect(mixUsers(arr)).not.toEqual([3,2,1]);
    expect(mixUsers(arr)).not.toEqual([2,1,3]);
  });
});