const EventEmitter = require('events');
const express = require("express");
const http = require("http");

// Load the Node-RED editor components
const REDEditorAPI = require("@node-red/editor-api");
const REDUtil = require("@node-red/util");
const REDRegistry = require("@node-red/registry");

// Load our fake runtime
const runtimeAPI = require("./lib/runtime/index.js");

const PORT = process.env.PORT || 8000;

// Create the base app and http server
const app = express();
const server = http.createServer(function(req,res) { app(req,res);});
server.on('error', function(err) {
    console.log(err);
});

// Setup the runtime settings
const settings = {
    available: ()  => false,
    httpNodeRoot: "/",
    version: "1.2.4",
    editorTheme: {
        page: { title: "Node-RED Learn"},
        header: { title: " Node-RED Learn"},
        palette: { editable: false }
    },
    coreNodesDir: __dirname+"/node_modules/@node-red/nodes",
};

// Initialise our fake runtime - this seems to be the minimal set needed
// to get the core nodes loaded.
// There may still be some bits of function needed.
const runtime = {
    events: new EventEmitter(),
    settings:settings,
    log: REDUtil.log,
    util: REDUtil.util,
    nodes: { registerType: () => {}},
    library: { register: () => {}},
    get adminApp() { return REDEditorAPI.httpAdmin },
}

runtimeAPI.init(runtime);

// Initialise the Node-RED components
REDUtil.init(settings);
REDEditorAPI.init(settings,server,{},runtimeAPI);
REDRegistry.init(runtime)


REDRegistry.load().then(() => REDEditorAPI.start()).then(() => {
// Start the editor-api
    // Attach the editor API app to ours
    app.use("/", REDEditorAPI.httpAdmin);
    server.listen(PORT,function() {
        console.log(`http://localhost:${PORT}`);
    });
});