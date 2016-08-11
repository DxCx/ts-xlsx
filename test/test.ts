"use strict";

import { readFile,
         read,
         write,
         utils } from "..";
import { expect, should } from "chai";

// Init framework.
should();

describe("Example", () => {
    it("Should be pass sanity", (done) => {
        expect(readFile).to.be.a("function");
        expect(read).to.be.a("function");
        expect(write).to.be.a("function");
        expect(utils).to.be.a("Object");
        expect(utils.sheet_to_json).to.be.a("function");
        expect(utils.sheet_to_csv).to.be.a("function");
        expect(utils.sheet_to_formulae).to.be.a("function");
        expect(utils.encode_cell).to.be.a("function");
        expect(utils.encode_range).to.be.a("function");
        done();
    });
});
