import { MDXRemote } from 'next-mdx-remote';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-json.min';
import PostHeader from '../post-header/post-header';
import './post.module.scss';

/* eslint-disable-next-line */
export interface PostProps {
  data: any;
}

export function Post(props: PostProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div style={{ width: '680px', margin: '0 auto' }}>
      <PostHeader title={props.data.title} coverImage={props.data.coverImage} />
      <div className="markdown-body">
        <h2>{props.data.title}</h2>
        <MDXRemote
          components={{
            pre(props) {
              const className = props.children.props.className;
              const matches = className.match(/language-(?<lang>.*)/);
              const language =
                matches && matches.groups && matches.groups.lang
                  ? matches.groups.lang
                  : '';

              return <pre lang={language}>{props.children}</pre>;
            },
          }}
          {...props.data.content}
        />
      </div>
    </div>
  );
}

export default Post;
