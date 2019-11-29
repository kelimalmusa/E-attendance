import express = require("express");

// tslint:disable-next-line:interface-name
export interface CisApiMiddleware {
  // handlerAdapter(app: express.Express): void;
  handlerAdapter(): express.Router;
  insertHandler?: express.RequestHandler;
  fetchtHandler?: express.RequestHandler;
  updatetHandler?: express.RequestHandler;
  deleteHandler?: express.RequestHandler;
  //   OptionsHandler?: express.RequestHandler; TODO araştırılacak
}
