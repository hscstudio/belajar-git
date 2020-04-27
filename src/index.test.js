const found = require('./index')

test('contributor ready', () => {
  expect(found('Hafid Mukhlasin')).toBe(true)
  // expect(found('Namamu')).toBe(true)
})