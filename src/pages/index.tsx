import { loadPosts } from 'api/load-posts';
import { useEffect } from 'react';
import { BaseTemplate } from 'templates/Base';
import mock from 'templates/Base/mock';

export default function Index() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'samuel-carvalho',
    }).then((r) => console.log(r.setting, r.posts));
  }, []);

  return (
    <>
      <BaseTemplate key={`${mock.settings}`} settings={mock.settings}>
        {mock.children}
      </BaseTemplate>
    </>
  );
}
