import React from 'react';
import { Heading } from 'components/Heading';
import { LogoLink } from 'components/LogoLink';
import { Content, Wrapper } from './styles';

export type HeaderPrpos = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderPrpos) => {
  return (
    <Wrapper>
      <LogoLink
        link="/"
        srcImg={logo}
        text={`${blogName} - ${blogDescription}`}
      />

      {showText && (
        <Content>
          <Heading size="small" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Content>
      )}
    </Wrapper>
  );
};
