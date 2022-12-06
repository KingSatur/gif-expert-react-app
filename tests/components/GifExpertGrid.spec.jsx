import { render, screen } from "@testing-library/react";
import { GifExpertGrid } from "../../src/components/GifExpertIGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs", () => ({
  useFetchGifs: jest.fn(),
}));

describe("Test of <GifExpertGrid />", () => {
  const category = "One punch";

  test("Should match with the snapshot", () => {
    useFetchGifs.mockReturnValue({
      isLoading: true,
      images: [],
    });
    render(<GifExpertGrid category={category} />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });
  test("Should show items when images are loaded", () => {
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

    useFetchGifs.mockReturnValue({
      isLoading: false,
      images: dataMock,
    });
    render(<GifExpertGrid category={category} />);

    expect(screen.getByText(category));
    expect(screen.getAllByRole("img").length).toBe(dataMock.length);
  });
});
