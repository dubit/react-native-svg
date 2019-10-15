/// <reference types="react" />
import Shape from './Shape';
import { NumberProp, ResponderProps } from '../lib/extract/types';
export default class Base64Image extends Shape<{
    scale?: NumberProp;
    dx?: NumberProp;
    dy?: NumberProp;
    base64: string;
    atlasDescriptor: string;
    frameDescriptor: string;
    clipPath: string;
} & ResponderProps> {
    static displayName: string;
    static defaultProps: {
        scale: number;
        dx: number;
        dy: number;
        base64: string;
        atlasDescriptor: string;
        frameDescriptor: string;
        clipPath: string;
    };
    render(): JSX.Element;
}
export declare const RNSVGBase64Image: any;
