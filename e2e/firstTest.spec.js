describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should view actionsheet buttons', async () => {
    await element(by.id('openActionSheet')).tap();
    await expect(element(by.text('button 1'))).toBeVisible();
  });

});
