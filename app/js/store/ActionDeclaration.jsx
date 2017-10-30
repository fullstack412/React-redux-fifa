class ActionDeclaration<Command>{

    constructor(name) {
        this.name = name;
    }

    toAction(Command = null) {
        return {
            type: this.name,
            payload: Command
        };
    }

    fromAction(action) {
        return action.payload as Command;
    }
}

export default ActionDeclaration;