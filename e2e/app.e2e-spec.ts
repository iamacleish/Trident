import { TridentPage } from './app.po';

describe('trident App', () => {
  let page: TridentPage;

  beforeEach(() => {
    page = new TridentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
