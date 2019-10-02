import ISort from "./interfaces/ISort";

export class BSort implements ISort<number> {
    // Quicksort

    sort(array: Array<number>): Array<number> {
        const newArray = [...array];
        this.quicksort(newArray, 0, newArray.length - 1);
        return newArray;
    }

    private quicksort(array: Array<number>, low: number, high: number): void {
        if (low < high) {
            const pi: number = this.partition(array, low, high);

            this.quicksort(array, low, pi - 1);
            this.quicksort(array, pi + 1, high);

        }
    }

    private partition(array: Array<number>, low: number, high: number): number {
        const pivot: number = array[high];
        
        let i: number = low - 1;
        for (let j: number = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;

                // swap arr[i] and arr[j]
                // TODO: use ES6
                let temp: number = array[i];
                array[i] = array[j];
                array[j] = temp
            }
        }

        // swap arr[i+1] and arr[high] (or pivot)
        // TODO: use ES6
        let temp: number = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;

        return i + 1;
    }
}
