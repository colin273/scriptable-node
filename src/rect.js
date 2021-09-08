const Size = require('./size.js');
const Point = require('./point.js');

/**
 * @summary Structure representing a rectangle.
 * @description The structure has a width, height and a coordinate in a two-dimensional coordinate system.
 * @see https://docs.scriptable.app/rect/
 */
class Rect {
    /**
     * @summary Constructs a rectangle.
     * @description Constructs a new rectangle placed in a two-dimensional coordinate system.
     * @param {number} x X coordinate.
     * @param {number} y Y coordinate.
     * @param {number} width Width of rectangle.
     * @param {number} height Height of rectangle.
     * @see https://docs.scriptable.app/rect/#-new-rect
     */
    constructor(x, y, width, height) {
        /**
         * @summary X value.
         * @description The x-coordinate of the rectangle.
         * @type {number}
         * @see https://docs.scriptable.app/rect/#x
         */
        this.x = x;

        /**
         * @summary Y value.
         * @description The y-coordinate of the rectangle.
         * @type {number}
         * @see https://docs.scriptable.app/rect/#y
         */
        this.y = y;

        /**
         * @summary Width of rectangle.
         * @description The width of the rectangle.
         * @type {number}
         * @see https://docs.scriptable.app/rect/#width
         */
        this.width = width;

        /**
         * @summary Height of rectangle.
         * @description The height of the rectangle.
         * @type {number}
         * @see https://docs.scriptable.app/rect/#height
         */
        this.height = height;
    }
    
    /**
     * @summary Minimum X value.
     * @description The smallest x-coordinate in the rectangle.
     * @type {number}
     * @readonly
     * @see https://docs.scriptable.app/rect/#minx
     */
    get minX() {
        return this.x;
    }

    /**
     * @summary Minimum Y value.
     * @description The smallest y-coordinate in the rectangle.
     * @type {number}
     * @readonly
     * @see https://docs.scriptable.app/rect/#miny
     */
    get minY() {
        return this.y
    }

    /**
     * @summary Maximum X value.
     * @description The greatest x-coordinate in the rectangle.
     * @type {number}
     * @readonly
     * @see https://docs.scriptable.app/rect/#maxx
     */
    get maxX() {
        return this.x + this.width;
    }

    /**
     * @summary Maximum Y value.
     * @description The greatest y-coordinate in the rectangle.
     * @type {number}
     * @readonly
     * @see https://docs.scriptable.app/rect/#maxy
     */
    get maxY() {
        return this.y + this.height;
    }

    /**
     * @summary Point that specifies the rectangles origin.
     * @description The x- and y-coordinate that specifies the rectangles origin as a Point structure.
     * @type {Point}
     * @see https://docs.scriptable.app/rect/#origin
     */
    get origin() {
        return new Point(this.x, this.y);
    }
    
    set origin(p) {
        this.x = p.x;
        this.y = p.y;
    }

    /**
     * @summary Size of the rectangle.
     * @description The width and height of the rectangle as a Size structure.
     * @type {Size}
     * @see https://docs.scriptable.app/rect/#size
     */
    get size() {
        return new Size(this.width, this.height)
    }
    set size(s) {
        this.width = s.width;
        this.height = s.height;
    }
}

module.exports = Rect;