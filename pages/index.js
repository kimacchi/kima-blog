import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import RatingBig from "../public/icons/rating_small.svg"
import BlogBig from "../public/icons/blog_small.svg"
import YoutubeBig from "../public/icons/youtube_big.svg"
import LinkedinBig from "../public/icons/linkedin_big.svg"
import InstaBig from "../public/icons/insta_big.svg"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimanim</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.nav}>
          <h1>Kimanim</h1>
          <div className={styles.links}>
            <div>
              <LinkedinBig />
            </div>
            <div>
              <YoutubeBig />
            </div>
            <div>
              <InstaBig />
            </div>
          </div>
        </div>
        <div className={styles.posts}>
          <div className={styles.main_post}>
            <div className={styles.overlay}>
              <h1>A psychological rollercoaster that will lock you to your chair:<br/>Cyberpunk: Edgerunners</h1>
              <p>Kima  •  September 29, 2022</p>
            </div>
          </div>
          <div className={styles.aligner}>
            <div className={styles.secondary_post_1}>
              <div className={styles.overlay}>
                <h1>Goodnight PunPun promises long nights without any “goods”</h1>
                <p>Kima  •  September 29, 2022</p>
              </div>
            </div>
            <div className={styles.secondary_post_2}>
              <div className={styles.overlay}>
                <h1>Loneliness of the Chainsaw Man Manga will hit you different with the upcoming anime series</h1>
                <p>Kima  •  September 29, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <RatingBig />
            <h1>Ratings</h1>
          </div>
          <div className={styles.button}>
            <BlogBig />
            <h1>All Posts</h1>
          </div>
        </div>
      </div>

    </div>
  )
}
