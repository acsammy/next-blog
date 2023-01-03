import React from 'react';
import * as Styled from './styles';
import { Heading } from 'components/Heading';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  return (
    <>
      <Heading>Ola mundo</Heading>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};
