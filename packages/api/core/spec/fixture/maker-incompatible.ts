export default class Maker {
  // Just so the maker isn't excluded
  platforms = [process.platform];

  async lol(): Promise<void> {
      throw new Error("STUB");
  }
}
