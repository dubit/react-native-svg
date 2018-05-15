import React, {Component, PropTypes} from 'react';
import createReactNativeComponentClass from 'react/lib/createReactNativeComponentClass';
import extractProps from '../lib/extract/extractProps';
import {Base64ImageAttributes} from '../lib/attributes';
import Shape from './Shape';
import {numberProp, touchableProps, responderProps} from '../lib/props';

class Base64Image extends Shape{
    static displayName = 'Base64Image';
    static propTypes = {
        ...responderProps,
        ...touchableProps,
        scale: PropTypes.number,
        dx: PropTypes.number,
        dy: PropTypes.number,
        base64: PropTypes.string.isRequired,
        atlasDescriptor: PropTypes.string.isRequired,
        frameDescriptor: PropTypes.string.isRequired,
    };

    static defaultProps = {
        scale: 1,
        dx: 0,
        dy: 0,
        base64: "",
        atlasDescriptor: "",
        frameDescriptor: "",
    };

    setNativeProps = (...args) => {
        this.root.setNativeProps(...args);
    };

    render() {
        let {props} = this;
        return <RNSVGBase64Image
            ref={ele => {this.root = ele;}}
            {...extractProps({...props, scale: null, dx: null, dy: null}, {transform: true, responder: true})}
            scale={props.scale}
            dx={props.dx}
            dy={props.dy}
            base64={props.base64}
            atlasDescriptor={props.atlasDescriptor}
            frameDescriptor={props.frameDescriptor}
        />;
    }
}

const RNSVGBase64Image = createReactNativeComponentClass({
    validAttributes: Base64ImageAttributes,
    uiViewClassName: 'RNSVGBase64Image'
});

export default Base64Image;
