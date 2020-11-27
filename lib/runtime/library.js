/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

/**
 * @mixin @node-red/runtime_library
 */

var runtime;

var api = module.exports = {
    init: function(_runtime) {
        runtime = _runtime;
    },

    /**
    * Gets an entry from the library.
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.library - the library
    * @param {String} opts.type - the type of entry
    * @param {String} opts.path - the path of the entry
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<String|Object>} - resolves when complete
    * @memberof @node-red/runtime_library
    */
    getEntry: async function(opts) {
        return [];
    },

    /**
    * Saves an entry to the library
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.library - the library
    * @param {String} opts.type - the type of entry
    * @param {String} opts.path - the path of the entry
    * @param {Object} opts.meta - any meta data associated with the entry
    * @param {String} opts.body - the body of the entry
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise} - resolves when complete
    * @memberof @node-red/runtime_library
    */
    saveEntry: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 404;
        throw err;
    }
}
