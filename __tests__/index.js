const dayjs = require('dayjs');
const strftime = require('../index.js');

dayjs.extend(strftime);

test('works', () => {
    expect(dayjs('2019-01-25').strftime("%B %d, %Y %H:%M:%S")).toBe("January 25, 2019 00:00:00");
})

test('works localization', () => {
  expect(dayjs('2019-01-25').strftime("%d %B, %Y %H:%M:%S", "nl_NL")).toBe("25 januari, 2019 00:00:00");
})