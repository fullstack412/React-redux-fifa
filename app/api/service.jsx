'use strict';
import * as $ from "jquery"

export default class FIFAService {

    constructor() {
        this.baseAdress = "http://worldcup.sfg.io/matches/country?fifa_code=";
    }

    public getMatchResults(fifaCode) {
        $.ajax(
            {method: 'GET',
                url: this.baseAdress + fifaCode,
                success: (bundles) => {
                    console.log(bundles);
                    let items;

                }
            }
        );
    }
}
