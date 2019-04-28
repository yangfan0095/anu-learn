import { miniCreateClass } from "../core/util";
import { Component } from "../core/Component";

export var Unbatch = miniCreateClass(
    function Unbatch(props) {
        this.state = {
            child: props.child
        };
    },
    Component,
    {
        render() {
            return this.state.child;
        }
    }
);
