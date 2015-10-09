#!/usr/bin/env/node
"use strict";
(function(){

    const PORT = 8081;
    const express = require("express");
    const bodyParser = require("body-parser");
    const server = express();
    const jsonParser = bodyParser.json();

    server.listen(PORT);
    console.log(`Mockserver started on port ${PORT}`);

    let notes = [
        { "id": 1, "title": "N-1", "color": "color1", "text": "Dummy note 1" },
        { "id": 2, "title": "N-2", "color": "color2", "text": "Dummy note 2" }
    ];

    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
        next();
    });

    server.get("/api/notes", (req, res) => {
        console.log("GET /api/notes");
        res.json(notes);
    });

    server.post("/api/notes", jsonParser, (req, res)=> {
        console.log("POST /api/notes");
        let note = req.body;
        note.id = notes.length+1;
        notes.push(note);
        res.json(note);
    });

    server.get("/api/notes/:id", (req, res)=> {
        let id = req.params["id"];
        console.log("GET /api/notes/"+id);
        let note = notes.filter((n)=> n.id == id)[0];
        res.json(note);
    });

    server.put("/api/notes/:id", jsonParser, (req, res)=>{
        let id = req.params["id"];
        console.log("PUT /api/notes/"+id);
        let note = req.body;
        let idx = notes.findIndex((n)=>n.id==note.id);
        notes.splice(idx,1, note);
        res.json(note)
    });

    server.delete("/api/notes/:id", (req, res)=>{
        let id = req.params["id"];
        console.log("DELETE /api/notes/"+id);
        let idx = notes.findIndex((n)=>n.id==id);
        console.log("Removing note at index " + idx);
        notes.splice(idx, 1);
        res.status(200).send();
    });

}());