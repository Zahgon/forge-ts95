import { Chunk, Compiler } from 'webpack';

export default class AssetRelocatorPatch {
  private readonly isProd: boolean;

  private readonly nodeIntegration: boolean;

  constructor(isProd: boolean, nodeIntegration: boolean) {
    this.isProd = isProd;
    this.nodeIntegration = nodeIntegration;
  }

  private injectedProductionDirnameCode(): string {
      throw new Error("STUB");
  }

  public apply(compiler: Compiler): void {
      throw new Error("STUB");
  }
}
