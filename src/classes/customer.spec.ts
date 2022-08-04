import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('Customer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Carlos', 'Alberto', '123.456.789-00');
    expect(sut.cpf).toBe('123.456.789-00');
    expect(sut.firstName).toBe('Carlos');
    expect(sut.lastName).toBe('Alberto');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Carlos', 'Alberto', '123.456.789-00');
    expect(sut.getIDN()).toBe('123.456.789-00');
    expect(sut.getName()).toBe('Carlos Alberto');
  });

  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer(
      'Carlos Company',
      '087.098.090/0001-00',
    );
    expect(sut.name).toBe('Carlos Company');
    expect(sut.cnpj).toBe('087.098.090/0001-00');
  });

  it('should have have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer(
      'Carlos Company',
      '087.098.090/0001-00',
    );
    expect(sut.getName()).toBe('Carlos Company');
    expect(sut.getIDN()).toBe('087.098.090/0001-00');
  });
});
