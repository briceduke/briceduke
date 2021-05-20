import Image from 'next/image';
import Head from 'next/head'

import Layout from '../../components/layout';
import Date from '../../components/date';

import utilStyles from '../../styles/util.module.scss';

import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'

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
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/default.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/sunburst.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
      </Head>

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
        <ReactMarkdown children={postData.contentHtml} rehypePlugins={[rehypeRaw]} />
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