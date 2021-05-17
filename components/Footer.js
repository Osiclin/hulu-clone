import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.innerwrapper}>
                    <h5 className={styles.sect}>BROWSE</h5>
                    <div className={styles.links}>
                        <ul className={styles.list}>
                            <li>Streaming Library</li>
                            <li>Live TV</li>
                            <li>Live News</li>
                            <li>Live Sports</li>
                        </ul>
                        <ul className={styles.list}>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>Originals</li>
                            <li>Networks</li>
                            <li>Kids</li>
                            <li>FX on Hulu</li>
                        </ul>
                        <ul className={styles.list}>
                            <li>HBO Max</li>
                            <li>Cinemax</li>
                            <li>Showtime</li>
                            <li>STARZ</li>
                        </ul>
                        <ul className={styles.list}>
                            <li>Hulu, Disney+, and ESPN+</li>
                            <li>Disney bundle with Hulu (No Ads)</li>
                            <li>Disney bundle with Hulu + Live TV</li>
                            <li>Student Discount</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.rightinnerwrapper}>
                    <div>
                        <h5 className={styles.sect}>HELP</h5>
                        
                            <ul className={styles.list}>
                                <li>Account & Billing</li>
                                <li>Plans & Pricing</li>
                                <li>Supported Devices</li>
                                <li>Accessibility</li>
                            </ul>
                    </div>

                    <div>
                        <h5 className={styles.sect}>ABOUT</h5>
                        <ul className={styles.list}>
                            <li>Press</li>
                            <li>Jobs</li>
                            <li>Contact</li>
                        </ul>        
                    </div>
                </div>
            </div>

            <div>
                <a href="#"><img className={styles.iimg} src="https://www.hulu.com/static/hitch/static/icons/facebook.svg" /></a>
                <a href="#"><img className={styles.iimg} src="https://www.hulu.com/static/hitch/static/icons/twitter.svg" /></a>
                <a href="#"><img className={styles.iimg} src="https://www.hulu.com/static/hitch/static/icons/youtube.svg" /></a>
                <a href="#"><img className={styles.iimg} src="https://www.hulu.com/static/hitch/static/icons/instagram.svg" /></a>
            </div>

            <ul className={styles.bottomfooterlist}>
                <li className={styles.bflist}>&copy; 2021 Hulu, LLC</li>
                <li className={styles.bflist}><img src="https://c.evidon.com/pub/icon1.png" />About Ads</li>
                <li className={styles.bflist}>Terms of Use</li>
                <li className={styles.bflist}>Privacy Policy</li>
                <li className={styles.bflist}>Do Not Sell My Personal information</li>
                <li className={styles.bflist}>Your California Privacy Rights</li>
                <li className={styles.bflist}>TV Parental Guidelines</li>
                <li className={styles.bflist}>Sitemap</li>
            </ul>
        </div>
    )
}