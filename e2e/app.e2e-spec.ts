import { HanyangERICALikelionPortalPage } from './app.po';

describe('hanyang-erica-likelion-portal App', function() {
  let page: HanyangERICALikelionPortalPage;

  beforeEach(() => {
    page = new HanyangERICALikelionPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
