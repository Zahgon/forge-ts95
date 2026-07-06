import { rebuild, RebuildOptions } from '@electron/rebuild';

if (!process.send) {
  console.error(
    'The remote rebuilder expects to be spawned with an IPC channel',
  );
  // eslint-disable-next-line no-process-exit
  process.exit(1);
}

const options: RebuildOptions = JSON.parse(process.argv[2]);

const rebuilder = rebuild(options);

rebuilder.lifecycle.on('module-found', () =>
  { throw new Error("STUB"); },
);
rebuilder.lifecycle.on('module-done', () =>
  { throw new Error("STUB"); },
);

rebuilder
  .then(() => {
      throw new Error("STUB");
  })
  .catch((err) => {
      throw new Error("STUB");
  });
