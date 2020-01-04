describe('app', () => {
  const f = (a, b) => a + b;
  it('counter', () => {
    expect(1 + 2).toEqual(3);
    expect(f(1, 3)).toEqual(4);
  });
});
