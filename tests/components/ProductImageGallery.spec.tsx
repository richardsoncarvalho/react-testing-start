import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render the product image gallery", () => {
    render(<ProductImageGallery imageUrls={["url1", "url2"]} />);

    const images = screen.queryAllByRole("img");
    expect(images).toHaveLength(2);

    images.forEach((image, index) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", `url${index + 1}`);
      expect(image).toHaveAttribute("alt", `Product ${index}`);
    });
  });
});
