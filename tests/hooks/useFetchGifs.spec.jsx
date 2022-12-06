import { renderHook, waitFor } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/helpers/getGifs", () => ({
  getGifs: jest.fn(),
}));

describe("Custom hook tests", () => {
  it("Should return inital state", () => {
    const {
      result: {
        current: { images, isLoading },
      },
    } = renderHook(() => useFetchGifs("Dragon ball"));
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });
  it("Should return images array and isLoading false", async () => {
    const dataMock = [
      {
        id: "123123",
        url: "image1.url",
        title: "Dragon",
      },
      {
        id: "0923123",
        url: "image2.url",
        title: "Angular",
      },
    ];
    getGifs.mockReturnValue(dataMock);
    const { result } = renderHook(() => useFetchGifs("Dragon ball"));

    await waitFor(() =>
      expect(result?.current?.images?.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result?.current;

    expect(images.length).toBe(dataMock.length);
    expect(images.length).toBe(dataMock.length);
    expect(isLoading).toBeFalsy();
  });
});
