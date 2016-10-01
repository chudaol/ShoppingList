// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
      .url('http://localhost:8081')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.nav.nav-tabs')
      .assert.elementPresent('.tab-content')
      .assert.containsText('h2', 'Groceries')
      .end()
  }
}
