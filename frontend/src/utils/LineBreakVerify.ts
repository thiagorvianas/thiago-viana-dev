export function LineBreakVerify(component: string): void {
  console.log(/[\n|\n\r]/.test(component));
}
