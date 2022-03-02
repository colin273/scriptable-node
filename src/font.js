"use strict";

class Font {
    /**
     * @param {string} name
     * @param {number} size
     */
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }

    static largeTitle() {
        return new this("", );
    }

    static title1() {
        return new this("", );
    }

    static title2() {
        return new this("", );
    }

    static title3() {
        return new this("", );
    }

    static headline() {
        return new this("", );
    }

    static subheadline() {
        return new this("", );
    }

    static body() {
        return new this("", );
    }

    static callout() {
        return new this("", );
    }

    static footnote() {
        return new this("", );
    }

    static caption1() {
        return new this("", );
    }

    static caption2() {
        return new this("", );
    }

    /**
     * @param {number} size
     */
    static systemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static ultraLightSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static thinSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static lightSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static regularSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static mediumSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static semiboldSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static boldSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static heavySystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static blackSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static italicSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static ultraLightMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static thinMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static lightMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static regularMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static mediumMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static semiboldMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static boldMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static heavyMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static blackMonospacedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static ultraLightRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static thinRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static lightRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static regularRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static mediumRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static semiboldRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static boldRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static heavyRoundedSystemFont(size) {
        return new this("", size);
    }

    /**
     * @param {number} size
     */
    static blackRoundedSystemFont(size) {
        return new this("", size);
    }
}

module.exports = Font;