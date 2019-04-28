import { Children } from '../../core/Children';
import { PropTypes } from '../../core/PropTypes';
import { Component } from '../../core/Component';
import { PureComponent } from '../../core/PureComponent';
import { createRef, forwardRef } from '../../core/createRef';
import { createPortal } from '../../core/createPortal';
import { createContext } from '../../core/createContext';
import { useState, useReducer, useEffect, useLayoutEffect, useCallback, useMemo, useRef, useContext, useImperativeHandle } from '../../core/hooks';

import {
    createElement,
    cloneElement,
    isValidElement,
    createFactory
} from '../../core/createElement';
import { Fragment, getWindow } from '../../core/util';

import { findDOMNode } from './findDOMNode';
import { DOMRenderer } from './DOMRenderer';
let win = getWindow();
let prevReact = win.React;
let React;
if (prevReact && prevReact.eventSystem) {
    React = prevReact; //解决引入多个
} else {
    let {
        render,
        eventSystem,
        unstable_renderSubtreeIntoContainer,
        unmountComponentAtNode
    } = DOMRenderer;

    React = win.React = win.ReactDOM = {
        //平台相关API
        eventSystem,
        findDOMNode,
        unmountComponentAtNode,
        unstable_renderSubtreeIntoContainer,
        //fiber底层API
        version: 'VERSION',
        render: render,
        hydrate: render,
        unstable_batchedUpdates: DOMRenderer.batchedUpdates,
        Fragment,
        PropTypes,
        Children,
        createPortal,
        createContext,
        Component,
        createRef,
        forwardRef,
        useState,
        useContext,
        useEffect,
        useLayoutEffect,
        useReducer,
        useCallback,
        useMemo,
        useRef,
        useImperativeHandle,
        createElement,
        cloneElement,
        PureComponent,
        isValidElement,
        createFactory
    };
}
export default React;