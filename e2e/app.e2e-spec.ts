import { DevelopPage } from './app.po';

describe('develop App', () => {
  let page: DevelopPage;

  beforeEach(() => {
    page = new DevelopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
