import { BSearch } from "./BSearch"

describe('BSearch', () => {
    it('should be a singleton', () => {
        const instanceA = BSearch.getInstance();
        const instanceB = BSearch.getInstance();
        const instanceC = BSearch.getInstance();
        const instanceD = BSearch.getInstance();

        expect(instanceA === instanceB);
        expect(instanceA === instanceC);
        expect(instanceA === instanceD);

        expect(instanceB === instanceC);
        expect(instanceC === instanceD);
    });

    it('should return the index of an item present in an array', () => {
        const array: Array<number> = [0, 2, 4, 5, 7, 9, 13, 14, 17, 22, 32, 65, 77, 83];
        const expectedIndex: number = 7;
        const itemToFind:number = array[expectedIndex];

        const finder: BSearch = BSearch.getInstance();
        const index: number = finder.find(array, itemToFind);

        expect(index).toBe(expectedIndex);
    });

    it('should return -1 for an item not present in an array', () => {
        const array: Array<number> = [0, 2, 4, 5, 7, 9, 13, 14, 17, 22, 32, 65, 77, 83];
        const itemToFind:number = 1024;

        const finder: BSearch = BSearch.getInstance();
        const index: number = finder.find(array, itemToFind);

        expect(index).toBe(-1);
    });
});
