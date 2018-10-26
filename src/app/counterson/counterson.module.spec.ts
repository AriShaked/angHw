import { CountersonModule } from './counterson.module';

describe('CountersonModule', () => {
  let countersonModule: CountersonModule;

  beforeEach(() => {
    countersonModule = new CountersonModule();
  });

  it('should create an instance', () => {
    expect(countersonModule).toBeTruthy();
  });
});
