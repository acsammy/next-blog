import { BaseTemplate } from 'templates/Base';
import mock from 'templates/Base/mock';

export default function Index() {
  return (
    <>
      <BaseTemplate key={`${mock.settings}`} settings={mock.settings}>
        {mock.children}
      </BaseTemplate>
    </>
  );
}
