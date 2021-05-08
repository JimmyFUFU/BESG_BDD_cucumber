import {Theme} from "../src/theme";

describe('background', function () {
  let theme = new Theme();
  let fake_get_today = jest.fn();

  beforeEach(() => {
    theme.get_today = fake_get_today;
  });

  it('today is xmas', () => {
    fake_get_today.mockReturnValueOnce(new Date(2000, 11, 25));
    expect(theme.background()).toBe('Xmas');
  });

  it('today is not xmas', () => {
    fake_get_today.mockReturnValueOnce(new Date(2000, 11, 26));
    expect(theme.background()).toBe('Normal');
  });
});


