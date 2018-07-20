/* eslint-env jasmine */
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
const $ = window.$
$(function () {
  describe('RSS Feeds', function () {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function () {
      expect(allFeeds).toBeDefined()
      expect(allFeeds.length).not.toBe(0)
    })

    // point8
    // Test that loops through each feed in the allFeeds object
    it('has a URL defined and that the URL is not empty', function () {
      allFeeds.forEach(function (feed) {
        // ensures it has a URL defined
        expect(feed.url).toBeDefined()
        // ensures the URL is not empty.
        expect(feed.length).not.toBe(0)
      })
    })

    // point9
    // Loops through each feed in the allFeeds object
    it('has a name defined and that the name is not empty', function () {
      allFeeds.forEach(function (feed) {
        // it has a name defined
        expect(feed.name).toBeDefined()
        // that the name is not empty
        expect(feed.name).not.toBe('')
      })
    })
  }) // end RSS Feeds

  // point 10
  // New test named "The menu"
  describe('The menu', function () {
    var body = $('body')
    var menuIconLink = $('.menu-icon-link')

    // Ensures the menu element is hidden by default. 
    // point 11
    it('the menu element is hidden by default', function () {
      expect(body.hasClass('menu-hidden')).toBe(true)
    })

    // Ensures the menu changes visibility when the menu icon is clicked.
    // point 12
    it('the menu changes visibility when the menu icon is clicked', function () {
      // click
      menuIconLink.click()
      // check if menu is false
      expect(body.hasClass('menu-hidden')).toBe(false)
      // click again
      menuIconLink.click()
      // check if menu is true
      expect(body.hasClass('menu-hidden')).toBe(true)
    })
  })

  // point 13
  // New test "Initial Entries"
  describe('Initial Entries', function () {
  // point 14
  /* Test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * single .entry element within the .feed container.
   */
    beforeEach(function (done) {
      loadFeed(0, function () {
        done()
      })
    })

    it('there is at least a single .entry element within the .feed container', function (done) {
      var singleEntry = $('.entry')
      // console.log(singleEntry)
      expect(singleEntry.length).toBeGreaterThan(0)
      done()
    })
  })

  // point 15
  // New test "New Feed Selection"
  describe('New Feed Selection', function () {
  // point 16
  /* Ensures when a new feed is loaded 
   * by the loadFeed function that the content actually changes.
   */
    var initUrl
    var newUrl

    beforeEach(function (done) {
      loadFeed(0, function () {
        initUrl = $('.feed').html()
        done()
      })
    })

    it('When a new feed is loaded by the loadFeed function the content changes', function (done) {
      // checks the new url and compare with initUrl
     loadFeed(1, function () {
        newUrl = $('.feed').html()
        expect(newUrl).not.toBe(initUrl)
        done()
      })
    })
  })
}())
