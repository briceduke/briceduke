import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import highlight from 'rehype-highlight'

import Layout from '../../components/layout';
import Date from '../../components/date';

import utilStyles from '../../styles/util.module.scss';

import { getAllPostIds, getPostData } from '../../lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';


export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
    pageTitle: string
    desc: string
    imgName: string
    markdown: string
  }
}) {

  return (
    <Layout
      pageTitle={postData.pageTitle}
      description={postData.desc}
      previewImage={postData.imgName}
    >
      <article>
        <Image
          priority
          src={`/img/${postData.imgName}`}
          width={1000}
          height={420}
          alt={postData.pageTitle}
        />
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          children={postData.markdown}
          rehypePlugins={[highlight]}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}