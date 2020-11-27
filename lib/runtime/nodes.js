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

var runtime;

var api = module.exports = {
    init: function(_runtime) {
        runtime = _runtime;
    },
    /**
    * Gets the info of an individual node set
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.id - the id of the node set to return
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<NodeInfo>} - the node information
    * @memberof @node-red/runtime_nodes
    */
    getNodeInfo: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },

    /**
    * Gets the list of node modules installed in the runtime
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<NodeList>} - the list of node modules
    * @memberof @node-red/runtime_nodes
    */
    getNodeList: async function(opts) {
        return [];
    },

    /**
    * Gets an individual node's html content
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.id - the id of the node set to return
    * @param {String} opts.lang - the locale language to return
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<String>} - the node html content
    * @memberof @node-red/runtime_nodes
    */
    getNodeConfig: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;

    },
    /**
    * Gets all node html content
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.lang - the locale language to return
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<String>} - the node html content
    * @memberof @node-red/runtime_nodes
    */
    getNodeConfigs: async function(opts) {
        return "";
    },

    /**
    * Gets the info of a node module
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.module - the id of the module to return
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<ModuleInfo>} - the node module info
    * @memberof @node-red/runtime_nodes
    */
    getModuleInfo: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },

    /**
    * Install a new module into the runtime
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.module - the id of the module to install
    * @param {String} opts.version - (optional) the version of the module to install
    * @param {Object} opts.tarball - (optional) a tarball file to install. Object has properties `name`, `size` and `buffer`.
    * @param {String} opts.url - (optional) url to install
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<ModuleInfo>} - the node module info
    * @memberof @node-red/runtime_nodes
    */
    addModule: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },
    /**
    * Removes a module from the runtime
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.module - the id of the module to remove
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise} - resolves when complete
    * @memberof @node-red/runtime_nodes
    */
    removeModule: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },

    /**
    * Enables or disables a module in the runtime
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.module - the id of the module to enable or disable
    * @param {String} opts.enabled - whether the module should be enabled or disabled
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<ModuleInfo>} - the module info object
    * @memberof @node-red/runtime_nodes
    */
    setModuleState: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },

    /**
    * Enables or disables a n individual node-set in the runtime
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.id - the id of the node-set to enable or disable
    * @param {String} opts.enabled - whether the module should be enabled or disabled
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<ModuleInfo>} - the module info object
    * @memberof @node-red/runtime_nodes
    */
    setNodeSetState: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },

    /**
    * Gets all registered module message catalogs
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {User} opts.lang - the i18n language to return. If not set, uses runtime default (en-US)
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<Object>} - the message catalogs
    * @memberof @node-red/runtime_nodes
    */
    getModuleCatalogs: async function(opts) {
        return {};
    },

    /**
    * Gets a modules message catalog
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {User} opts.module - the module
    * @param {User} opts.lang - the i18n language to return. If not set, uses runtime default (en-US)
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<Object>} - the message catalog
    * @memberof @node-red/runtime_nodes
    */
    getModuleCatalog: async function(opts) {
        return {};
    },

    /**
    * Gets the list of all icons available in the modules installed within the runtime
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<IconList>} - the list of all icons
    * @memberof @node-red/runtime_nodes
    */
    getIconList: async function(opts) {
        return []
    },
    /**
    * Gets a node icon
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.module - the id of the module requesting the icon
    * @param {String} opts.icon - the name of the icon
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<Buffer>} - the icon file as a Buffer or null if no icon available
    * @memberof @node-red/runtime_nodes
    */
    getIcon: async function(opts) {
        return __dirname+"/../../node_modules/@node-red/editor-client/public/red/images/icons/arrow-in.svg"
    }
}
