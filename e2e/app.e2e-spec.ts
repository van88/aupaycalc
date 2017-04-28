import { PaycalcPage } from './app.po';

describe('paycalc App', () => {
  let page: PaycalcPage;

  beforeEach(() => {
    page = new PaycalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
