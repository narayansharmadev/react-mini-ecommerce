import { render, screen } from '@testing-library/react';
import ProductCard from '../../components/ProductCard/ProductCard';

const product = {
  id: '1',
  title: 'Test Product',
  price: 999,
  description: 'Sample description',
  image: '/sample.jpg'
};

test('renders product title', () => {
  render(
    <ProductCard
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
      image={product.image}
      onAddToCart={() => {}}
    />
  );

  const title = screen.getByText(/test product/i);
  expect(title).toBeInTheDocument();
});
