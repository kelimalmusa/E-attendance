import express = require("express");
export interface middleware {
    handlerAdapter(): express.Router;
    insertHandler?: express.RequestHandler;
    fetchHandler?: express.RequestHandler;
    updateHandler?: express.RequestHandler;
    deleteHandler?: express.RequestHandler;
}