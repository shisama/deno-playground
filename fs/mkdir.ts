import { mkdir } from 'deno';

(async() => {
  await Promise.all([
      mkdir('tmp/sub1'),
      mkdir('tmp/sub2'),
      mkdir('tmp/sub1/sub3'),
    ]);
})();