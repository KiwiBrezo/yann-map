import {connectCanvas} from "./context-connector";

class Map2d {

    _canvas = null;
    _context = null;

    constructor(id) {
        this._canvas = connectCanvas(id);
        this._context = this._canvas.getContext("2d");
    }
}

export default Map2d