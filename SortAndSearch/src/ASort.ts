import ISort from "./interfaces/ISort";

export class ASort implements ISort<number> {
    // Bubble sort

    sort(array: Array<number>): Array<number> {
        const newArray = [...array];

        newArray.forEach((el, i) => {
            newArray.forEach((el, j) => {
                if (j < (newArray.length - i - 1)) {
                    if (newArray[j] > newArray[j + 1]) {
                        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
                    }
                }
            });
        });

        return newArray;
    }
}
