/**
 * @file DataLayer-Map.js
 * @author Jordan Kanter <jordan.kanter@stratigent.com>
 * @fileoverview Documents the United DataLayer
 * The Data Object Map for United. Includes both {@link Bootstrapper.dataObject} and {@link UA}
 * Notes:
 * I have included documentation for {@link Bootstrapper.dataObject} and {@link UA} in 3 forms
 * <ol>
 * <li>Browsable, via <a href="http://usejsdoc.org/">jsdoc</a></li>
 * <li>Code, in javascript</li>
 * <li>Prose, in the comments</li>
 * </ol>
 *
 * Also, please note that this documentation outputs to the following Client-Facing documentation
 * <ol>
 *   <li>A Solution Design Reference (<abbr>SDR</abbr>)</li>
 *   <li>A Tag Map</li>
 *   <li>A Business requirements document</li>
 * </ol>
 *
 * You can follow along using the generated html from the <code>jsdoc</code>, the inline code, or by reading the comments/code.
 * You can also generate the comments yourself by following the directions in the README.md 
 * Please note that this is not the actual data layer, but documentation about the data layer
 * 
 * <p>
 * The Business Requirements document could go here
 * 
 * Our financial client would like to track the following things on their website
 * 
 * 1. Click stream data for transferring cash to and from their account
 * 2. Click stream data for creating an account
 * 3. Watching Financial Education videos on how this would work
 * </p>
 *
 */

/**
 * @useraction Navigate to the homepage
 * @action Populate Hero Variant
 * @wireframe {@link}
 * @populate
 * @campaign
 * @variants
 * @success_metric What would a successful test look like
 * @target Your target audience for the particular test (or target segment)
 */

/**
 * The UA object contains United's internal Data Layer. It is populated by United IT and contains Application Data
 * @type {Object}
 * @namespace
 */

var UA = {};

/**
 * @description The Bootstrapper object contains the entirety of Stratigent's Ensighten namespace
 * It contains all of the ensighten callbacks as well as the Data Layer itself.
 *
 * @type {Object}
 * @namespace
 */
var Bootstrapper = Bootstrapper || {};

/**
 * The global data object. Uses Ensighten for storage
 * @type {Object}
 * @see {@link Bootstrapper}
 * @namespace
 * @sdr _dl
 * @useraction Click
 * @populate All
 */
Bootstrapper.dataObject = {};


/**
 * The function for adding data to the data object for the data object
 * @type {Function}
 * @see {@link Bootstrapper.dataObject}
 * @param {String} key   the key for the data object
 * @param {String} value  the value for the key object
 * @param {String} layer   the layer for the key-value pair
 * @param {String} scope   the scope of this key-value pair ()
 * @param {String} session   Is this a session variable or something
 */
Bootstrapper.dataObject.addData = function (key, value, layer, scope, session) {
};

/**
 *
 * This function works in backward specifity from the order of parameters,
 * such that the {@link Bootstrapper.dataObject} function is structured in such a way
 * that Bootstrapper.dataObject[scope][layer][key] is the value returned by
 * Bootstrapper.dataObject.getData(key, layer, scope). Therefore
 * for any string set of <code>(key, layer, scope)</code> strings,
 * <pre>Bootstrapper.dataObject.getData(key, layer, scope) === Bootstrapper.dataObject[scope][layer][key]</pre>
 *
 *
 * <p>For example:
 * <pre>Bootstrapper.dataObject.getData('partnerID', 'adara', 'global') === Bootstrapper.dataObject['global']['adara']['partnerID'];</pre>
 * On <a href="https://stage.united.com/ual/">United Staging</a>, both the function and the data lookup
 * return the integer <code>1020</code>. Feel free to test for yourself in the javascript console on the page
 *
 *
 * If the tuple cannot be found, return the empty string (<code>""</code>)
 * @type {Function}
 * @param {String} key   the key whose value we want
 * @param {String} layer   the Data Layer from which we want to grab the content
 * @param {String} scope   the top-level scope from which the data comes from
 * @return {Dynamic}
 * The value of the object in the passed key, layer, and scope
 *
 */
Bootstrapper.dataObject.getData = function (key, layer, scope) {};

/**
 * Identical to {@link Bootstrapper.dataObject.getData}, but returns the United
 * empty string value of <code>"--"</code> when the tuple cannot be found.
 * @type {Function}
 * @return {Dynamic}
 * The value of the object in the passed key, layer, and scope
 */
Bootstrapper.dataObject._getData = function (key, layer, scope) {
};

/**
 * The global scope of the data object. Can be queried with {@link Bootstrapper.dataObject.addData}
 * and queried with {@link Bootstrapper.dataObject.getData}. These functions can only query up to 3
 * layers deep, otherwise the data must be retrieved directly from the object.
 * This scope contains all of the other scopes maintained for the united site.
 * @type {Object}
 * @see {@link Bootstrapper.dataObject}
 * @namespace
 */
Bootstrapper.dataObject.global = {};

/**
 * The page scope of the data object. Populated with page specific data.
 * @type {Object}
 * @see {@link Bootstrapper.dataObject}
 * @namespace
 */
Bootstrapper.dataObject.page = {};

/**
 * The pulse scope of the data object. Populated with pulse data
 * @type {Object}
 * @see {@link Bootstrapper.dataObject}
 * @namespace
 */
Bootstrapper.dataObject.pulse = {};

/**
 * The testing scope of the data object. Populated with testing data
 * @type {Object}
 * @see {@link Bootstrapper.dataObject}
 * @namespace
 */
Bootstrapper.dataObject.testing = {};

/**
 * Whether or not the data layer is loaded. Allowed values are 0 and 1
 * @see {@link Bootstrapper.dataObject}
 * @type {Integer}
 */
Bootstrapper.dataObject.dataLayerLoaded = 0;

/**
 * Whether or not the ajax data layer is loaded. Allowed values are 0 and 1 (Can this be greater than 1?)
 * @see {@link Bootstrapper.dataObject}
 * @type {Integer}
 */
Bootstrapper.dataObject.ajaxDatalayerLoaded = 0;

/**
 * Third party tagging - Adara
 * @see {@link Bootstrapper.dataObject.global}
 * @type {Object}
 * @namespace
 */
Bootstrapper.dataObject.global.adara = {};

/**
 * Third party tagging - Adara - The Adara partner ID
 * @see {@link Bootstrapper.dataObject.global.adara}
 * @type {Integer}
 */
Bootstrapper.dataObject.global.adara.partnerID = 1020;

/**
 *
 * Third party tagging - Adara - The Adara Javascript URL
 * Typically, this also includes a cache busting integer on the end, but
 * in the case of this documentation i've used the integer <code>1</code>
 * @see {@link Bootstrapper.dataObject.global.adara}
 * @type {String}
 */
Bootstrapper.dataObject.global.adara.jsReqBaseURL = "//tag.yieldoptimizer.com/ps/ps?t=f&p=" + Bootstrapper.dataObject.global.adara.partnerID + "&zcb=" + 1;

/**
 *
 * Third party tagging - Adara - The Adara Image URL
 * Typically this also includes a cache busting integer on the end, but for
 * the purpose of this documentation i have used the integer <code>1</code>
 * @see {@link Bootstrapper.dataObject.global.adara}
 * @type {String}
 */
Bootstrapper.dataObject.global.adara.imgReqBaseURL = "//tag.yieldoptimizer.com/ps/ps?t=f&p=" + Bootstrapper.dataObject.global.adara.partnerID + "&zcb=" + 1;

/**
 * Global Campaign parameters
 * Includes data on the global marketing campaign
 * For each object in the global marketing campaign namespace, we loop through
 * document.location.search and set the parameter to the value passed.
 * The campaign parameters will be set to the default value if not passed
 * @see {@link Bootstrapper.dataObject.global}
 * @type {Object}
 * @namespace
 * @sdr campaign
 * @tagmap global
 * @useraction Arrival on Campaign Page
 * @populate campaign parameters
 */
Bootstrapper.dataObject.global.campaign = {};

/**
 * The global campaign Asset position. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 * @sdr campaign.asset_position
 * @tagmap global
 * @useraction Arrival on Campaign Page
 */
Bootstrapper.dataObject.global.campaign.asset_position = "--";

/**
 * The global campaign asset type. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.asset_type = "--";

/**
 * The global campaign direct marketing agency. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.campaign_dma = "--";

/**
 * The global campaign launch date as a string. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.launch_date = "--";

/**
 * The global campaign partner category. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.partner_category = "--";

/**
 * The global campaign partner name. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.partner_name = "--";

/**
 * The global campaign promo code as a string. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.promo_code = "--";

/**
 * The global sub campaign name. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.sub_campaign = "--";

/**
 * The global targeting string. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.targeting = "--";

/**
 * The global Google analytics universal tagging campaign name. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @see https://support.google.com/analytics/answer/1033863?rd=1#parameters
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.utm_campaign = "--";

/**
 * The global Google analytics universal tagging content name. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @see https://support.google.com/analytics/answer/1033863?rd=1#parameters
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.utm_content = "--";

/**
 * The global Google analytics universal analytics tagging medium (email | cost-per-click, etc.). Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @see https://support.google.com/analytics/answer/1033863?rd=1#parameters
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.utm_medium = "--";

/**
 * The global Google analytics universal analytics partner tagging category. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.utm_partner_category = "--";

/**
 * The global Google analytics universal analytics partner name. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.utm_partner_name = "--";

/**
 * The global Google analytics universal analytics tagging source (google | newsletter, etc.). Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @see https://support.google.com/analytics/answer/1033863?rd=1#parameters
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.utm_source = "--";

/**
 * The global Google analytics universal analytics term (i.e. the paid search term). Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global}
 * @see https://support.google.com/analytics/answer/1033863?rd=1#parameters
 * @type {String}
 */
Bootstrapper.dataObject.global.campaign.utm_term = "--";

/**
 * The visitor layer of the global scope. Populated with global site-visitor data
 * @see {@link Bootstrapper.dataObject.global}
 * @type {Object}
 * @namespace
 */
Bootstrapper.dataObject.global.visitor = {};

/**
 * Whether a user/visitor is logged in or not. Defaults to false.
 * @see {@link Bootstrapper.dataObject.global.visitor}
 * @type {Boolean}
 */
Bootstrapper.dataObject.global.visitor.loggedIn = false;

/**
 * A user/visitor's Mileage Plus Account Number. Defaults to <code>"--"</code>.
 * @see {@link Bootstrapper.dataObject.global.visitor}
 * @type {String}
 */
Bootstrapper.dataObject.global.visitor.MPAccNumber = "--";

/**
 * A user/visitor's Mileage Plus Account Number, encoded with an md5 sum. Defaults to <code>md5("--");</code>.
 * @type {String}
 */
Bootstrapper.dataObject.global.visitor.MPAccNumberE = "--";

/**
 * The global user/visitor's customer ID (CID)
 * @see {@link Bootstrapper.dataObject.global.visitor}
 * @type {String}
 */
Bootstrapper.dataObject.global.visitor.CustomerId = "--";

/**
 * The global user/visitor's customer ID (CID), encoded with an md5 sum. Defaults to <code>md5("--");</code>.
 * @type String
 */
Bootstrapper.dataObject.global.visitor.CustomerIdE = "--";

/**
 * The global users/visitor's Mileage Plus Account status. Defaults to <code>"--"</code>
 * @see {@link Bootstrapper.dataObject.global.visitor}
 * @type {String}
 */
Bootstrapper.dataObject.global.visitor.MPAccStatus = "--";


/**
 * The global users/visitor's Mileage Plus Miles Balance. Defaults to <code>"--"</code>.
 * @see {@link Bootstrapper.dataObject.global.visitor}
 * @type {String}
 */
Bootstrapper.dataObject.global.visitor.MPBalance = "--";

/**
 * The global users/visitor's number of Mileage Plus Premier Segments as a string. Defaults to <code>"--"</code>.
 * Please note the variable spelling
 * @see {@link Bootstrapper.dataObject.global.visitor}
 * @type {String}
 */
Bootstrapper.dataObject.global.visitor.MPPrimeierSegments = "--";

/**
 * The global users/visitor's number of Mileage Plus Premier Miles as a string. Defaults to <code>"--"</code>
 * Please note the variable spelling
 * @see {@link Bootstrapper.dataObject.global.visitor}
 * @type {String}
 */
Bootstrapper.dataObject.global.visitor.MPPrimierMiles = "--";


/**
 * global layer that contains Language and Point of Sale Data
 * @type {Object}
 * @see {@link Bootstrapper.dataObject.global}
 * @namespace
 */
Bootstrapper.dataObject.global.locale = {};

/**
 * The two character language code of the locale. Set from the UA data structure.
 * If unavailable in UA, tries to set it from document.location
 * Defaults to <code>"--"</code>
 * @type {String}
 * @see {@link UA.AppData.Data.Session.LanguageCulture}
 */
Bootstrapper.dataObject.global.locale.langCode = "--";

/**
 * The two character uppercase country code point of sale. Set from the UA data structure.
 * If unavailable in UA, tries to set it from document.location.
 * Defaults to <code>"--"</code>
 * @type {String}
 * @see {@link UA.AppData.Data.Session.POS}
 */
Bootstrapper.dataObject.global.locale.POS = "--";

/**
 * The page scope's pageType, defaulting to <code>"General"</code>
 * Can be <code>"General" | "award" | "revenue"</code> or something set by {@link UA}
 * Also queries for the id hdnAward using a jQuery selector to fetch the data
 * @see {@link Bootstrapper.dataObject.page}
 * @type {String}
 */
Bootstrapper.dataObject.page.pageType = "General";

/**
 * The page scope's search information
 * @see {@link Bootstrapper.dataObject.page}
 * @type {Object}
 * @namespace
 */
Bootstrapper.dataObject.page.srchRslts = {};

/**
 * "advanced search" | "unaccompanied minor information" | "results".
 * Search results that are set depending on the values of document.location.pathname
 * and {@link UA.Booking.UnaccompaniedMinor} and {@link UA.Booking.FlightSearch}
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page}
 * @see {@link UA.Booking}
 */
Bootstrapper.dataObject.page.srchRslts.contentShown = "";

/**
 * The Page Index of the given search results content, as an integer. Defaults to <code>0</code>
 * @type {Integer}
 * @see {@link Bootstrapper.dataObject.page.srchResults}
 */
Bootstrapper.dataObject.page.srchRslts.pageIndex = 0;

/**
 * The Flight Index of the given search results content, as an integer. Defaults to <code>0</code>
 * @type {Integer}
 * @see {@link Bootstrapper.dataObject.page.srchRslts}
 */
Bootstrapper.dataObject.page.srchRslts.flightIndex = 0;

/**
 * A representation of the visual results panel for search results
 * @type {Object}
 * @see {@link Bootstrapper.dataObject.page.srchRslts}
 * @namespace
 */
Bootstrapper.dataObject.page.srchRslts.resultsPanel = {};

/**
 * Column data for the Search Results panel
 * @type {Object}
 * @see {@link Bootstrapper.dataObject.page.srchRslts}
 */
Bootstrapper.dataObject.page.srchRslts.resultsPanel.nCols = {};

/**
 * Ancillary purchase information layer in the page scope.
 *
 * @type {Object}
 * @see {@link Bootstrapper.dataObject.page}
 * @namespace
 */
Bootstrapper.dataObject.page.ancillary = {};

/**
 * The item number (Number of items?) as a string of an ancillary purchase, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.ancillary}
 */
Bootstrapper.dataObject.page.ancillary.NumItem = "--";

/**
 * The OnePass Number as a string of an ancillary purchase, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.ancillary}
 */
Bootstrapper.dataObject.page.ancillary.Onepass_Number = "--";

/**
 * The OrderID as a string of an ancillary purchase, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.ancillary}
 */
Bootstrapper.dataObject.page.ancillary.OrderID = "--";

/**
 * The Order Total as a string of an ancillary purchase, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.ancillary}
 */
Bootstrapper.dataObject.page.ancillary.OrderTotal = "--";

/**
 * The Product Code as a string of an ancillary purchase, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.ancillary}
 */
Bootstrapper.dataObject.page.ancillary.PRODUCT_CODE = "--";

/**
 * The page scopes Flight Search data.
 * @type {Object}
 * @see {@link Bootstrapper.dataObject.page}
 * @namespace
 */
Bootstrapper.dataObject.page.flightSearch = {};

/**
 * The total legs of the flight search content on the page, defaulting to <code>0</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.totalLegs = "0";

/**
 * The Fare Class of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.fareClass = "--";

/**
 * The Cabin Type of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.cabinType = "--";

/**
 * The Secondary Cabin Type of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.cabinType2 = "--";

/**
 * The Initial destination of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.dest1 = "--";

/**
 * The Second destination of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.dest2 = "--";

/**
 * The Final destination of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.finalDest = "--";

/**
 * The Final destination date, as a string, of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.finalTravelDate = "--";

/**
 * The Final destination date formatted using ISO date encoding rules, as a string,
 * of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 * @see https://en.wikipedia.org/wiki/ISO_8601
 */
Bootstrapper.dataObject.page.flightSearch.finalTravelDateISO = "--";

/**
 * The Final travel time, as a string, of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.finalTravelTime = "--";

/**
 * The lowest fare price, as a string, of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.lowestFarePrice = "--";

/**
 * The first flight origin, as a string, of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.orig1 = "--";

/**
 * The second flight origin, as a string, of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.orig2 = "--";

/**
 * Number of passengers, as a string, of the current page's flight search scope, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.paxCount = "--";

/**
 * Whether or not the individual is staying over a saturday night. Valid values are Yes|No, as a string defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.satNightStay = "--";

/**
 * The Float containing the number of days, including the fractional hour values, of the trip. defaults to the string <code>"--"</code>
 * @type {String|Number}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.stayLength = "--";

/**
 * Trip start date, as a String in the format MM-DD-YYYY, defaulting to <code>"--"</code>
 * For example 11-01-2016
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.travelDate1 = "--";

/**
 * Trip start date, as a String in the format YYYY-MM-DD, defaulting to <code>"--"</code>
 * For example 2016-11-01
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.travelDate1ISO = "--";

/**
 * Trip end date (or second leg), as a String in the format MM-DD-YYYY, defaulting to <code>"--"</code>
 * For example 11-01-2016
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.travelDate2 = "--";

/**
 * Trip end date (or second leg), as a String in the format YYYY-MM-DD, defaulting to <code>"--"</code>
 * For example 2016-11-01
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.travelDate2ISO = "--";

/**
 * Trip 12 hour travel start time, as a string in the format "HH:MM (AM|PM)", defaulting to <code>"--"</code>
 * For example, 11:22 PM
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 * @type {String}
 */
Bootstrapper.dataObject.page.flightSearch.travelTime1 = "--";

/**
 * Trip 12 hour travel end time (or start leg), as a string in the format "HH:MM (AM|PM)", defaulting to <code>"--"</code>
 * For example, 11:22 PM
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 * @type {String}
 */
Bootstrapper.dataObject.page.flightSearch.travelTime2 = "--";

/**
 * The trip model, as a String, defaulting to <code>"--"</code>
 * Allowed values include <code>"Business"|"Leisure"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.tripModel = "--";

/**
 * An Array of trips within the flight search.
 * @type {Array}
 * @namespace
 */
Bootstrapper.dataObject.page.flightSearch.trips = [];
/**
 * An example of the trips object.
 */
Bootstrapper.dataObject.page.flightSearch.trips[1] = {};

/**
 * The Cabin of the current trips object, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.trips[1].Cabin = "--";

/**
 * The decoded destination, as a 3 character string (Airport code) of the current trip object, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.trips[1].DecodedDestination = "--";

/**
 * The decoded origin, as a 3 character string (Airport code) of the current trip object, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.trips[1].DecodedOrigin = "--";

/**
 * The Departure Date of the current Trip, as a readable string of the same format
 * as {@link Bootstrapper.dataObject.page.flightSearch.travelDate1}
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.trips[1].DepartDate = "--";

/**
 * The departure time of the current trip object, as a readable string of the same format
 * as {@link Bootstrapper.dataObject.page.flightSearch.travelTime1}
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.trips[1].DepartTime = "--";

/**
 * The Destination, as a 3 character string (Airport code) of the current trip object, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.trips[1].Destination = "--";

/**
 * The Origin, as a 3 character string (Airport code) of the current trip object, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.trips[1].Origin = "--";

/**
 * The trip type of the current flight search, defaulting to <code>"--"</code>
 * Allowed values are <code>"One Way"|"Round Trip"|"Multiple Destinations"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.tripType = "--";

/**
 * The trip type of the second leg of the flight search, defaulting to <code>"--"</code>
 * Allowed values are <code>"One Way"|"Round Trip"|"Multiple Destinations"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch}
 */
Bootstrapper.dataObject.page.flightSearch.tripType2 = "--";

/**
 * The type of the page, as a string, defaulting to <code>"--"</code>
 *
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSearch.trips}
 * @memberOf Bootstrapper.dataObject.page.flightSearch.trips
 */
Bootstrapper.dataObject.page.flightSearch.type = "--";

/**
 * Flight segments, as an Array of Objects on a page
 * @type {Array}
 * @namespace
 */
Bootstrapper.dataObject.page.flightSegments = [];

/**
 * Fare Cost, as String in the local currency, defaulting to <code>0</code>
 * @type {Number|String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments}
 */
Bootstrapper.dataObject.page.flightSegments.fareCost = 0;

/**
 * Fare Cost, as String in the local currency, defaulting to <code>0</code>
 * @type {Number|String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments}
 * @memberOf Bootstrapper.dataObject.page.flightSegments
 */
Bootstrapper.dataObject.page.flightSegments.fareMiles = 0;

/**
 * Passenger count, as an integer, defaulting to <code>0</code>
 * @type {Number}
 * @see {@link Bootstrapper.dataObject.page.flightSegments}
 * @memberOf Bootstrapper.dataObject.page.flightSegments
 */
Bootstrapper.dataObject.page.flightSegments.paxCount = 0;

/**
 * The total legs of the trip, defaulting to <code>0</code>
 * @type {Number}
 * @see {@link Bootstrapper.dataObject.page.flightSegments}
 * @memberOf Bootstrapper.dataObject.page.flightSegments
 */
Bootstrapper.dataObject.page.flightSegments.totalLegs = 0;

Bootstrapper.dataObject.page.flightSegments[0] = {};

/**
 * An array of objects containing information on each leg of the trip
 * Two flight segments are populated by default, having index <code>0</code> and <code>1</code>
 * One leg of the trip is populated by default, having index <code>0</code>
 * @type Array
 * @namespace Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs = [];

Bootstrapper.dataObject.page.flightSegments[0].legs[0] = {};

/**
 * A String representing the type of aircraft of the current leg of the trip,
 * defaulting to <code>"--"</code>
 * for example <code>"Boeing 737-900"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].aircraft = "--";

/**
 * A String representing the arrival date of the current leg of the trip
 * In a friendly format similar to {@link Bootstrapper.dataObject.page.flightSearch.travelDate1}
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].arrivalDate = "--";

/**
 * The ISO Formatted (<code>YYYY-MM-DD</code>) arrival date of the current
 * segment leg, as a String, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].arrivalDateISO = "--";

/**
 * The arrival time of the current leg of the trip, as a pretty print date as a String
 * in the format <code>HH:MM (AM|PM)</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].arrivalTime = "--";

/**
 * The departure time of the current leg of the trip, as a pretty print date as a String
 * in the format <code>HH:MM (AM|PM)</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].departureTime = "--";

/**
 * The destination airport of the current leg of the trip, as a three digit code as a String
 * for example, <code>"ORD"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].destAirport = "--";
/**
 * The duration in days of the current leg of the trip, as a String,
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].duration = "--";

/**
 * The fare class (A one digit character code) of the current leg of the trip, as a String.
 * Known allowed values are <code>"0"|"V"</code>
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].fareClass = "--";

/**
 * Whether or not the current leg is ecoPlus, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].ecoPlus = "--";

/**
 * The flight number of the current leg, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].flight = "--";

/**
 * The flight date of the current leg, as an ISO formatted String in the format
 * <code>YYYY-MM-DD</code>, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].flightdateISO = "--";

/**
 * The Integer number of miles of the current leg of the trip, as a String, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].miles = "--";

/**
 * The originating airport of the current leg of the trip, as a three digit code as a String
 * for example, <code>"ORD"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].origAirport = "--";

/**
 * The String value of the Service Class of the current leg
 * Allowed values are <code>"Coach"|"First Class"|"Business"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].serviceClass = "--";

/**
 * The flight date of the current leg, as an pretty print formatted String in the format
 * <code>MM-DD-YYYY</code>, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].flightDate = "--";

/**
 * The travel time as a String, in hours, of the current trip leg, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 * @memberOf Bootstrapper.dataObject.page.flightSegments.legs
 */
Bootstrapper.dataObject.page.flightSegments[0].legs[0].travelTime = "--";

/**
 * The second object, same members as the first
 * @type {Object}
 * @see {@link Bootstrapper.dataObject.page.flightSegments}
 */
Bootstrapper.dataObject.page.flightSegments[1] = {};

/**
 * The second legs object in the array, same object tree as the first
 * @see {@link Bootstrapper.dataObject.page.flightSegments.legs}
 */
Bootstrapper.dataObject.page.flightSegments[1].legs = [];
Bootstrapper.dataObject.page.flightSegments[1].legs[0] = {};
Bootstrapper.dataObject.page.flightSegments[1].legs[0].aircraft = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].arrivalDate = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].arrivalDateISO = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].arrivalTime = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].departureTime = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].destAirport = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].duration = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].fareClass = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].ecoPlus = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].flight = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].flightdateISO = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].miles = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].origAirport = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].serviceClass = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].destAirport = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].flightDate = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].origAirport = "--";
Bootstrapper.dataObject.page.flightSegments[1].legs[0].travelTime = "--";


/**
 * The transaction data on the page
 * @type {Object}
 * @namespace
 */
Bootstrapper.dataObject.page.transaction = {};

/**
 * The cabin type, as a String of the current page transaction, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.cabinType = "--";

/**
 * The confirmation email address, as a String of the current page transaction, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.confEmailAddr = "--";

/**
 * The cost of the current transaction in the local currency,
 * as a String of the current page transaction, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.cost = "--";

/**
 * The per-mile cost (FIXME: Is this right?) as a String of the current transaction in the local
 * currency, defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.costInMiles = "--";

/**
 * The numbers of miles of the current transaction as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.miles = "--";

/**
 * The currency of the current transaction as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.currency = "--";

/**
 * The destination airport of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.dest1 = "--";

/**
 * The second destination airport of the current page transaction, as a String
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.dest2 = "--";

/**
 * (FIXME: What is this? Is this <code>Economy|First Class</code>)
 * @type {String}
 */
Bootstrapper.dataObject.page.transaction.fareClassData = "--";

/**
 * The originating airport of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.orig1 = "--";

/**
 * The second originating airport of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.orig2 = "--";

/**
 * The HTML of the page transaction number, scraped from the page
 * defaulting to <code>"--"</code>
 * @type String
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */

Bootstrapper.dataObject.page.transaction.PNR = "--";

/**
 * The number of items in the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.qty = "--";

/**
 * The stay length of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.stayLength = "--";

/**
 * The readable first travel date in the format <code>DD-MM-YYYY</code>
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.travelDate1 = "--";

/**
 * The first flight number of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.flightNumber1 = "--";

/**
 * The first aircraft name of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.aircraft1 = "--";

/**
 * The first ISO travel date in the format <code>YYYY-MM-DD</code>
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.travelDate1ISO = "--";

/**
 * The readable second travel date in the format <code>DD-MM-YYYY</code>
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.travelDate2 = "--";

/**
 * The second flight number of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.flightNumber2 = "--";

/**
 * The second aircraft name of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.aircraft2 = "--";

/**
 * The second ISO travel date in the format <code>YYYY-MM-DD</code>
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.travelDate2ISO = "--";

/**
 * Trip Type, as a String
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * Allowed values are <code>"One-Way"|"Round-Trip"|"Multi-Stop"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.tripType = "--";

/**
 * Trip Type, as a String
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * Allowed values are <code>"Revenue"|"Award"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.type = "--";

/**
 * The upgrade cost, in the local currency
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.upgradeCost = "--";

/**
 * FIXME: (?)
 *
 */
Bootstrapper.dataObject.page.transaction.ticketType = "--";

/**
 * If this ticket was purchased in advanced, as a String
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.advPurch = "--";

/**
 * The Offer Code, as a String
 * of the current page transaction, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.dataObject.page.transaction}
 */
Bootstrapper.dataObject.page.transaction.offerCode = "--";

/**
 * The current page transaction data
 * @type {Object}
 */
Bootstrapper.transData = {};

/**
 * The confirmation number of the current request, as a String
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.transData}
 */
Bootstrapper.transData.confNumber = "--"; //Bootstrapper.dataObject.page.transaction.PNR

/**
 * The current order date, as a String in the format YYYY-MM-DD
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrapper.transData}
 */
Bootstrapper.transData.ordDate = "--"; //Current Date(YYYY-MM-DD)

/**
 * The current Order Type (FIXME: What are the allowable values?), as a String,
 * defaulting to <code>"--"</code>
 * @type {String}
 * @see {@link Bootstrappr.transData}
 */
Bootstrapper.transData.OrderType = "--";

/**
 * The current order ID, as a String
 * defaulting to <code>"--"</code>
 * Consists of the Current date in the format <code>YYYY-MM-DD</code>
 * concatenated to <code>"-"</code>, then the page transaction PNR
 * <code>Current Date(YYYY-MM-DD) + "-" +Bootstrapper.dataObject.page.transaction.PNR</code>
 * @type String
 * @see {@link Bootstrapper.transData}
 * @see {@link Bootstrapper.dataObject.page.transaction.PNR}
 */
Bootstrapper.transData.ordID = "--";

/**
 * Function that returns the ensighten reference type for the pulse calls
 * @see {Bootstrapper.dataObject.pulse}
 * @returns {undefined}
 */
Bootstrapper.dataObject.pulse.ensRefType = function () {
};

/**
 * the prt parameter integer, as a String, to Ensighten Pulse calls.
 * Defaults to <code>"8"</code>
 * @see {Bootstrapper.dataObject.pulse}
 * @type {String}
 */
Bootstrapper.dataObject.pulse.prt = "8";

/**
 * Function that loads the data Layer
 * @param {type} ajaxCalled
 * @returns {undefined}
 * @memberOf Boostrapper.dataObject
 */
Bootstrapper.dataObject.loadDataLayer = function (ajaxCalled) {
};

/**
 * Function that sets the global variables for the Data Object
 * @returns {undefined}
 *
 */
Bootstrapper.dataObject.setGlobalVars = function () {
};

/**
 * Function that sets up and sets the js custom variables for Google Analytics
 * @returns {undefined}
 */
Bootstrapper.dataObject.loadDataTracking = function () {
};

/**
 * Function that sets the MileagePlus account and status parameters
 * @returns {undefined}
 */
Bootstrapper.dataObject.setMPVars = function () {
};

/**
 * Internal United Application Data Namespace.
 * Please note that all AppData is done as discovery. Ideally, in order to limit time spent in discovery
 * IT and The Web Development Unit would provide us with a document / schema like the one here.
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.AppData = {};

/**
 * Internal United Application Data Data Namespace
 * @type {Object}
 * @see {@link UA.AppData}
 * @namespace
 */
UA.AppData.Data = {};

/**
 * Internal United Data Session Namespace
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.AppData.Data.Session = {};

/**
 *
 * Internal United Session language details.
 */
UA.AppData.Data.Session.LanguageCulture = "en";

UA.AppData.Data.Session.POS = "US";

/**
 * Internal United Data Shopping Cart Namespace
 * @type {Object}
 * @see {@link UA.AppData.Data}
 * @namespace
 */
UA.AppData.Data.Cart = {};

UA.AppData.Data.Cart.Currency = "USD";

UA.AppData.Data.Cart.Discounts = null;

UA.AppData.Data.Cart.Fees = null;

UA.AppData.Data.Cart.PaymentType = null;

/**
 *
 * @type {Array}
 */
UA.AppData.Data.Cart.Products = [];

/**
 * Products contains an n-length nested Array of products. This is an example of such an object.
 * The object contained in Products contains 4 keys, which are <code>Prices|ProductId|ProductType|ProductSubType</code>
 * The Prices key is an array itself of objects containing three keys, which are <code>CostInLocalCurrency|Currency|PricingType</code>
 * @see {@link UA.AppData.Data.Cart.Products}
 */
UA.AppData.Data.Cart.Products[0] = {
  Prices: [
    {
      CostInLocalCurrency: "183.0",
      Currency: "USD",
      PricingType: "Fare"
    },
    {
      CostInLocalCurrency: "31.0",
      Currency: "USD",
      PricingType: "Taxes"
    }
  ],
  ProductID: "8G65Jj92znUPFALR9eK2fS01f",
  ProductSubType: "BASE",
  ProductType: "ECONOMY"
};

/**
 * The Transaction Type of the Given transaction. Allowed values are Award|Revenue
 * @type {String}
 */
UA.AppData.Data.Cart.TransactionType = "Revenue";

/**
 * Internal United Common Namespace
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.Common = {};

/**
 * Internal United Locale Namespace
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.Localize = {};

/**
 * Internal United Locale Namespace
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.UI = {};

/**
 * Internal United Utilities Namespace
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.Utilities = {};

/**
 * Internal United Booking Namespace
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.Booking = {};


/**
 * Internal United Namespace for modifying a set of Search Results
 * @type {Object}
 * @see {@link UA}
 * @namespace
 */
UA.Booking.EditSearch = {};

UA.Booking.EditSearch.bindEvents = function () {
};

UA.Booking.EditSearch.changeTravelers = function (t) {
};

UA.Booking.EditSearch.elements = {};

UA.Booking.EditSearch.handleSearchTypeChange = function (t) {
};

UA.Booking.EditSearch.init = function () {
};

UA.Booking.EditSearch.initAirportAutocomplete = function () {
};

UA.Booking.EditSearch.redirectToAdvansearchOnSubmit = false;

UA.Booking.EditSearch.setAwardTravel = function () {
};

/* is it a flexible date for travel */
UA.Booking.EditSearch.setFlexDate = function () {
};

UA.Booking.EditSearch.setOneWay = function () {
};

UA.Booking.EditSearch.setRoundTrip = function () {
};

/**
 * Internal United Namespace for Booking Fare Rules
 * @type {Object}
 * @see {@link UA.Booking}
 * @namespace
 */
UA.Booking.FareRules = {};

/**
 * Bind Events for fare rules
 * @type {Function}
 * @see {@link UA.Booking.FareRules}
 */
UA.Booking.FareRules.bindEvents = function () {
};


UA.Booking.FareRules.elements = {};

/**
 * Handle a type change of the Search run
 * @param {type} t
 * @returns {undefined}
 * @see {@link UA.Booking.FareRules}
 */
UA.Booking.FareRules.handleSearchTypeChange = function (t) {};

/**
 * initialize the Fare Rules
 * @returns {undefined}
 * @see {@link UA.Booking.FareRules}
 */
UA.Booking.FareRules.init = function () {};

/**
 *
 * @param obj the UA data object
 */
var copyUAObject = function(obj) {
  // safe copy to include circular
  var errorKeys = [];
  for (var k in obj) {
    try {
      copy(obj[k]);
    }
    catch (e) {
      errorKeys.push(k);
    }
  }
  return obj;
};

/**
 * Example UA object scraped from UA code
 * via console.copy
 * UI object is circular, so in some versions of chrome it throws an error
 * @namespace
 * @see {@link UA}
 */
try {
  UA._example = require('_dl_map_dat.json');
} catch (e) {
  UA._example = {};
}

function runDeployment() { }

// Flag for running this within ensighten. Make sure to set Bootstrapper._live
// before running this from within ensighten
if (Bootstrapper && Bootstrapper._live) {
  if (Bootstrapper.dataObject && Bootstrapper.dataObject.ajaxDatalayerLoaded) {
    runDeployment();
  }
  else {
    $(window).on("ajaxDatalayerLoaded", function() {
      runDeployment();
    });
  }
}
// nodejs code
if (module && module.exports) {
  var debugMode = true;
  module.exports.Bootstrapper = Bootstrapper;
  if (console && debugMode) {
    console.log(Object.keys(Bootstrapper.dataObject));
  }
}
