import chalk from 'chalk';

function redConsoleError(msg: string) {
  console.error(chalk.red(msg));
}

process.on(
  'unhandledRejection',
  (reason: string, promise: Promise<unknown>) => {
      throw new Error("STUB");
  },
);

process.on('uncaughtException', (err) => {
    throw new Error("STUB");
});
