import ISingleton from "./interfaces/ISingleton";
import ISearch from "./interfaces/ISearch";
import staticImplements from "./interfaces/staticImplements";

@staticImplements<ISingleton<BSearch>>()
export abstract class BSearch implements ISearch<number> {
    private static BSearchImpl = class BSearchImpl extends BSearch {
        private numberOfOperations: number = 0;

        public getNumberOfOperations(): number {
            return this.numberOfOperations;
        }

        public find(array: Array<number>, item: number): number {
            return this.binarySearch(array, 0, array.length - 1, item);
        }

        private binarySearch(array: Array<number>, left: number, right: number, item: number): number {
            this.numberOfOperations++;

            if (right >= left) {
                const middle: number = Math.floor(left + (right - left) / 2);

                if (array[middle] == item) {
                    return middle;
                } else if (array[middle] > item) {
                    return this.binarySearch(array, left, middle - 1, item);
                } else {
                    return this.binarySearch(array, middle + 1, right, item);
                }
            } else {
                return -1;
            }
        }
    };

    
    private static instance: BSearch = null;

    public static getInstance(): BSearch {
        if (BSearch.instance === null) {
            BSearch.instance = new BSearch.BSearchImpl();
        }
        
        return BSearch.instance;
    }

    public abstract find(array: Array<number>, item: number): number;
    public abstract getNumberOfOperations(): number;
}
