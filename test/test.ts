"use strict";

import { readFile,
         read,
         utils } from "..";
import { expect, should } from "chai";

// Init framework.
should();

describe("Example", () => {
    it("Should be pass sanity", (done) => {
        expect(readFile).to.be.a("function");
        expect(read).to.be.a("function");
        expect(utils).to.be.a("Object");
        done();
    });
});
