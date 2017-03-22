import { AngularTestAppPage } from './app.po';

describe('angular-test-app App', () => {
  let page: AngularTestAppPage;

  beforeEach(() => {
    page = new AngularTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
