import React from 'react';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';

export type FooterPrpos = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterPrpos) => {
  return (
    <Styled.Container>
      <TextComponent>{footerHtml}</TextComponent>
    </Styled.Container>
  );
};
