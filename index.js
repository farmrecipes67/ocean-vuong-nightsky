'use strict';

/**
 * ocean-vuong-nightsky
 * An npm package inspired by Ocean Vuong
 * An npm package inspired by Ocean Vuong — generates tender, luminous verses weaving memory, migration, and queer identity.
 */

const poems = [
  "This is a placeholder poem in the style of Ocean Vuong.",
  "Replace these with generated or curated verses.",
  "Each invocation returns a random selection."
];

/**
 * Returns a random poem inspired by Ocean Vuong
 * @returns {string} A poem string
 */
function getPoem() {
  const idx = Math.floor(Math.random() * poems.length);
  return poems[idx];
}

/**
 * Returns all poems in the collection
 * @returns {string[]} Array of poem strings
 */
function getAllPoems() {
  return poems.slice();
}

module.exports = { getPoem, getAllPoems };

if (require.main === module) {
  console.log(getPoem());
}
