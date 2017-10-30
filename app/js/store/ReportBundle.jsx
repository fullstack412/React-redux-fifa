import ActionDeclaration from "./ActionDeclaration"
import FIFAService from "../../api/service"
import * as StoreState from "./StoreFactory"
import * as lodash from "lodash";

class Actions {

    prefix = "MATCH_RESULT/";
    public static IsLoading = new ActionDeclaration(Actions.prefix + "LOADING");
}

let mainState = {
    isCreatingNew: string,
    isLoading: boolean
}

const defaultState = {
    isCreatingNew: '',
    isLoading: false
}

function reduce(mainState = defaultState, action) {
    switch (action.type) {

        default: return state;
    }
}

class Service {
    public static loadMatchResults() {

        return (dispatch, getState) => {
            FIFAService.getMatchResults('POR');
        }
    }
}

const name = "ReportBundle";

export {
    reduce as Reducer,
    defaultState as DefaultState,
    mainState as State,
    Service as Service,
    name as name
};


