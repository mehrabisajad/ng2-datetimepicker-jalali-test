import { Ng2DatetimepickerJalaliPage } from './app.po';

describe('ng2-datetimepicker-jalali App', () => {
  let page: Ng2DatetimepickerJalaliPage;

  beforeEach(() => {
    page = new Ng2DatetimepickerJalaliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
