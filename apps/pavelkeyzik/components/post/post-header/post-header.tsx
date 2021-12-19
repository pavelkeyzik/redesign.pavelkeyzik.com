import Image from 'next/image';
import './post-header.module.scss';

/* eslint-disable-next-line */
export interface PostHeaderProps {
  title: string;
  coverImage: any;
}

export function PostHeader(props: PostHeaderProps) {
  return (
    <div style={{ marginBottom: 32 }}>
      <Image
        src={props.coverImage.src}
        height={620}
        width={1240}
        objectFit="cover"
        alt={`Cover image for ${props.title}`}
      />
    </div>
  );
}

export default PostHeader;
