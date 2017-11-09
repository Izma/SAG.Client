import { SAGPage } from './app.po';

describe('sag App', () => {
  let page: SAGPage;

  beforeEach(() => {
    page = new SAGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
