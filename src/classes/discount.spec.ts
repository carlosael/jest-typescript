import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10)).toBe(10);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(10)).toBe(5);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBe(9);
  });
});
