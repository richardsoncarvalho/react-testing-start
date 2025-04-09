const ProductImageGallery = ({ imageUrls }: { imageUrls: string[] }) => {
  if (imageUrls.length === 0) return null;

  return (
    <ul>
      {imageUrls.map((url, index) => (
        <li key={url}>
          <img src={url} alt={`Product ${index}`} />
        </li>
      ))}
    </ul>
  );
};

export default ProductImageGallery;
