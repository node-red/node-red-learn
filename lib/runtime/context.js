/**
 * Copyright OpenJS Foundation and other contributors
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


var api = module.exports = {
    init: function(_runtime) {
        runtime = _runtime;
    },
    /**
    * Gets the info of an individual node set
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.scope - the scope of the context
    * @param {String} opts.id - the id of the context
    * @param {String} opts.store - the context store
    * @param {String} opts.key - the context key
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise} - the node information
    * @memberof @node-red/runtime_context
    */
    getValue: async function(opts) {
        var err = new Error();
        err.code = "not_found";
        err.status = 404;
        throw err;
    },

    /**
    * Gets the info of an individual node set
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.scope - the scope of the context
    * @param {String} opts.id - the id of the context
    * @param {String} opts.store - the context store
    * @param {String} opts.key - the context key
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise} - the node information
    * @memberof @node-red/runtime_context
    */
    delete: async function(opts) {
        var err = new Error();
        err.code = "not_found";
        err.status = 404;
        throw err;
    }
}
