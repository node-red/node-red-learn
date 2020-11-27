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
    * Gets the current flow configuration
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<Flows>} - the active flow configuration
    * @memberof @node-red/runtime_flows
    */
    getFlows: async function(opts) {
        return { flows: [], rev: "0"}
    },
    /**
    * Sets the current flow configuration
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.flows - the flow configuration: `{flows: [..], credentials: {}}`
    * @param {Object} opts.deploymentType - the type of deployment - "full", "nodes", "flows", "reload"
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<Flows>} - the active flow configuration
    * @memberof @node-red/runtime_flows
    */
    setFlows: async function(opts) {
        var flows = opts.flows;
        var deploymentType = opts.deploymentType||"full";
        if (deploymentType === 'reload') {
            // Reload the current flows
        } else {
            if (flows.hasOwnProperty('rev')) {
                var currentVersion = runtime.flows.getFlows().rev;
                if (currentVersion !== flows.rev) {
                    var err;
                    err = new Error();
                    err.code = "version_mismatch";
                    err.status = 409;
                    //TODO: log warning
                    throw err;
                }
            }
            // Set the new flow config
            // runtime.flows.setFlows(flows.flows,flows.credentials,deploymentType,null,null,opts.user);
        }
        // Return the new flow revision identifier...
        return {rev:"1"};
    },

    /**
    * Adds a flow configuration
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.flow - the flow to add
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<String>} - the id of the added flow
    * @memberof @node-red/runtime_flows
    */
    addFlow: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },

    /**
    * Gets an individual flow configuration
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.id - the id of the flow to retrieve
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<Flow>} - the active flow configuration
    * @memberof @node-red/runtime_flows
    */
    getFlow: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;
    },
    /**
    * Updates an existing flow configuration
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.id - the id of the flow to update
    * @param {Object} opts.flow - the flow configuration
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<String>} - the id of the updated flow
    * @memberof @node-red/runtime_flows
    */
    updateFlow: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;

    },
    /**
    * Deletes a flow
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {Object} opts.id - the id of the flow to delete
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise} - resolves if successful
    * @memberof @node-red/runtime_flows
    */
    deleteFlow: async function(opts) {
        let err = new Error("Not implemented")
        err.status = 400;
        throw err;

    },

    /**
    * Gets the safe credentials for a node
    * @param {Object} opts
    * @param {User} opts.user - the user calling the api
    * @param {String} opts.type - the node type to return the credential information for
    * @param {String} opts.id - the node id
    * @param {Object} opts.req - the request to log (optional)
    * @return {Promise<Object>} - the safe credentials
    * @memberof @node-red/runtime_flows
    */
    getNodeCredentials: async function(opts) {
        return {};
        // runtime.log.audit({event: "credentials.get",type:opts.type,id:opts.id}, opts.req);
        // var credentials = runtime.nodes.getCredentials(opts.id);
        // if (!credentials) {
        //     return {};
        // }
        // var sendCredentials = {};
        // var cred;
        // if (/^subflow(:|$)/.test(opts.type)) {
        //     for (cred in credentials) {
        //         if (credentials.hasOwnProperty(cred)) {
        //             sendCredentials['has_'+cred] = credentials[cred] != null && credentials[cred] !== '';
        //         }
        //     }
        // } else {
        //     var definition = runtime.nodes.getCredentialDefinition(opts.type) || {};
        //     for (cred in definition) {
        //         if (definition.hasOwnProperty(cred)) {
        //             if (definition[cred].type == "password") {
        //                 var key = 'has_' + cred;
        //                 sendCredentials[key] = credentials[cred] != null && credentials[cred] !== '';
        //                 continue;
        //             }
        //             sendCredentials[cred] = credentials[cred] || '';
        //         }
        //     }
        // }
        // return sendCredentials;
    }
}
