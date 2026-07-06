import chalk from 'chalk';
import logSymbols from 'log-symbols';

type Deprecation = {
  replaceWith: (replacement: string) => void;
};

export default (what: string): Deprecation => { throw new Error("STUB"); };
