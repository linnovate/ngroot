import { NgrootPage } from './app.po';

describe('ngroot App', function() {
  let page: NgrootPage;

  beforeEach(() => {
    page = new NgrootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
