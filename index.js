const EventEmitter = require('events');
const express = require("express");
const http = require("http");
const REDClientAPI = require("@node-red/editor-api");
const REDUtil = require("@node-red/util");

const app = express();

const PORT = process.env.PORT || 8000;

const runtimeAPI = require("./lib/runtime/index.js");

const server = http.createServer(function(req,res) { app(req,res);});
server.on('error', function(err) {
    console.log(err);
});

const settings = {
    httpNodeRoot: "/",
    version: "1.2.4",
    editorTheme: {
        page: { title: "Node-RED Learn"},
        header: { title: " Node-RED Learn"},
        palette: { editable: false }
    }


};
runtimeAPI.init({
    events: new EventEmitter(),
    settings:settings
});
REDUtil.init(settings);
REDClientAPI.init(settings,server,{},runtimeAPI);
REDClientAPI.start().then(() => {
    app.use(REDClientAPI.httpAdmin);

    server.listen(PORT,function() {
        console.log(`http://localhost:${PORT}`);
    });
});