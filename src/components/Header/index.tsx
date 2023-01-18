import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';
import { Content, Wrapper } from './styles';

export type HeaderProps = {
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
}: HeaderProps) => {
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
