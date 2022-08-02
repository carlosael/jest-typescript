import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut('Shirt', 10);
    expect(sut).toHaveProperty('name', 'Shirt');
    expect(sut).toHaveProperty('price', 10);
  });
});
