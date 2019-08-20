import React, {Component} from 'react';

type ContactProps = {
    title: string,
    paragraph: string,
}

export const Contact = ({title, paragraph}: ContactProps) => <div>
    <h2> {title} </h2>
    <p> {paragraph} </p>
</div>