import { FillPipe } from './fill.pipe';

describe('FillPipe', () => {
  const fillPipe = new FillPipe();

  it('should return an array of n elements filled with null values', () => {
    const nArr = [2, 4, 7, 11];

    nArr.forEach((n) => {
      const resultantArray = fillPipe.transform(n);
      expect(resultantArray).toHaveSize(n);
      resultantArray.forEach((element) => expect(element).toBeNull());
    });
  });
});
