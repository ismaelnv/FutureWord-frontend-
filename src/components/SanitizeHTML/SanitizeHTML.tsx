import {createElement, HTMLAttributes } from "react";
import sanitize from 'sanitize-html';

type SanitizeHTMLProps = {

    tag: string;
    children: string

} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ tag, children, ...rest}: SanitizeHTMLProps) =>{

    const sanitized = sanitize(children, {

        allowedTags: ['b','i','em','p']
    })

    return createElement(

        tag,
        {...rest, dangerouslySetInnerHTML:{__html:sanitized}},
        null
    )

}