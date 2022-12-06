import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("Test of <GifGridItem />", () => {
  const title = "dragon ball";
  const url = "drangonball.image";
  test("Should match with the snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show image with the url", () => {
    render(<GifGridItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toContain(url);
    expect(title).toBe(title);
  });

  test("Should show the title", () => {
    render(<GifGridItem title={title} url={url} />);
    const { textContent } = screen.getByText(title);
    expect(textContent).toContain(title);
  });
});
