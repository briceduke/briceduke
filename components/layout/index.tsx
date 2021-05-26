import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './layout.module.scss';
import utilStyles from '../../styles/util.module.scss';

const twitterHandle = 'bricewduke';
export const siteName = 'Brice Duke';

export default function Layout({
  children,
  home,
  pageTitle,
  description,
  previewImage,
}: {
  children: React.ReactNode
  home?: boolean,
  pageTitle: string,
  description: string,
  previewImage: string
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {siteName} | {pageTitle}
        </title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={description} />

        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content={twitterHandle} key='twhandle' />

        <meta
          property='og:image'
          content={`../../public/img/${previewImage}`}
          key='ogimage'
        />
        <meta property='og:site_name' content={siteName} key='ogsitename' />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/img/profile_image.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={siteName}
            />
            <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/img/profile_image.jpg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={siteName}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{siteName}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main className={styles.content}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
