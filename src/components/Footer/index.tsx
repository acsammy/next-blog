import React from 'react';
import * as Styled from './styles';
import { HtmlContent } from '../HtmlContent';

export type FooterPrpos = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterPrpos) => {
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
};
