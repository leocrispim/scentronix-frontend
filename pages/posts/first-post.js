import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/eso.jpg" // Route of the image file
        height={800} // Desired size with correct aspect ratio
        width={1024} // Desired size with correct aspect ratio
        alt="Cool Wallpaper"
      />
    </>
  )
}