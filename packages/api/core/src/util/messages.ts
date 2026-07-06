export function info(interactive: boolean, message: string): void {
    throw new Error("STUB");
}

export function warn(interactive: boolean, message: string): void {
  if (interactive) {
    console.warn(message);
  }
}
