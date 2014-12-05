describe ("#squeeze", function() {
  it("it removes duplicate letters from a word", function() {
    expect(squeeze("squoooze")).toBe("squoze");
    expect(squeeze("AW-WEE-OO KILLER TOFU")).toBe("AW-WE-O KILER TOFU");
    expect(squeeze("yabba dabba doo")).toBe("yaba daba do");
  });
});