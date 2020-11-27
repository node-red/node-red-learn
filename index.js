const EventEmitter = require('events');
const express = require("express");
const http = require("http");

// Load the Node-RED editor components
const REDEditorAPI = require("@node-red/editor-api");
const REDUtil = require("@node-red/util");

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
    httpNodeRoot: "/",
    version: "1.2.4",
    editorTheme: {
        page: { title: "Node-RED Learn"},
        header: { title: " Node-RED Learn"},
        palette: { editable: false }
    }
};

// Initialise our fake runtime
runtimeAPI.init({
    events: new EventEmitter(),
    settings:settings
});

// Initialise the Node-RED components
REDUtil.init(settings);
REDEditorAPI.init(settings,server,{},runtimeAPI);

// Start the editor-api
REDEditorAPI.start().then(() => {
    // Attach the editor API app to ours
    app.use("/", REDEditorAPI.httpAdmin);
    server.listen(PORT,function() {
        console.log(`http://localhost:${PORT}`);
    });
});