import { removeAll } from 'deno';

(async() => {
    // remove 'tmp' including sub directories
    await removeAll('tmp');
})();