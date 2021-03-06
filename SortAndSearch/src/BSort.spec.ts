import ISort from "./interfaces/ISort";
import { BSort } from "./BSort";

describe('BSort', () => {
    it('should sort an unsorted array of number', () => {
        const unsorted: Array<number> = [13, 2, 17, 5, 77, 22, 83, 65, 14, 9, 0, 4, 7, 32];
        const expected: Array<number> = [0, 2, 4, 5, 7, 9, 13, 14, 17, 22, 32, 65, 77, 83];

        const sorter: ISort<number> = new BSort();
        const sorted: Array<number> = sorter.sort(unsorted);

        expect(sorted).toEqual(expected);
    });

    it('should not modify the original array while sorting', () => {
        const unsorted: Array<number> = [13, 2, 17, 5, 77, 22, 83, 65, 14, 9, 0, 4, 7, 32];

        const sorter: ISort<number> = new BSort();
        sorter.sort(unsorted);

        expect(unsorted).toEqual(unsorted);
    });
});
