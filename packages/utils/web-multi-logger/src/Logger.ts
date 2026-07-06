import http from 'node:http';
import path from 'node:path';

import express from 'express';
import ews from 'express-ws';

import Tab from './Tab';

export { Tab };

export default class Logger {
  private app = express();

  private ws!: ews.Instance;

  private tabs: Tab[] = [];

  private server: http.Server | null = null;

  constructor(private port = 9000) {
      throw new Error("STUB");
  }

  private registerRoutes() {
      throw new Error("STUB");
  }

  /**
   * Creates a new tab with the given name, the name should be human readable
   * it will be used as the tab title in the front end.
   */
  createTab(name: string): Tab {
      throw new Error("STUB");
  }

  /**
   * Start the HTTP server hosting the web UI.
   *
   * @returns the port number
   */
  start(): Promise<number> {
    return new Promise<number>((resolve) => {
        throw new Error("STUB");
    });
  }

  /**
   * Stop the HTTP server hosting the web UI
   */
  stop(): void {
      throw new Error("STUB");
  }
}
