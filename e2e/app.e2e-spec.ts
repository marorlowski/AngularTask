import { AngulatTaskPage } from './app.po';

describe('angulat-task App', () => {
  let page: AngulatTaskPage;

  beforeEach(() => {
    page = new AngulatTaskPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
