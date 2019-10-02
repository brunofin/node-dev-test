import { ASort } from './ASort';
import { BSort } from './BSort';
import { BSearch } from './BSearch';

const unsorted = [13, 2, 17, 5, 77, 22, 83, 65, 14, 9, 0, 4, 7, 32];
const elementsToFind = [1, 5, 13, 27, 77];

const ASorter: ASort = new ASort();
const BSorter: BSort = new BSort();

const sortedByA: Array<number> = ASorter.sort(unsorted);
const sortedByB: Array<number> = BSorter.sort(unsorted);

const finder: BSearch = BSearch.getInstance();

const AFound: Array<number> = elementsToFind.map(item => finder.find(sortedByA, item));
console.log(`Number of operations now: ${ finder.getNumberOfOperations() }`);
console.log(AFound);

const BFound: Array<number> = elementsToFind.map(item => finder.find(sortedByB, item));
console.log(`Number of operations now: ${ finder.getNumberOfOperations() }`);
console.log(BFound);
