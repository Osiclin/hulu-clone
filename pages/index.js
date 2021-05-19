import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import LineSub from '../components/LineSub'
import Footer from '../components/Footer'
import { useEffect, useRef, useState } from 'react'

export default function Home({ data }) {
  let login = useRef(null)
  let cont = useRef(null)
  let cd = useRef(null)
  let addons = useRef(null)
  

  const ToggleAddons = () => {
    addons.style.display = 'none'
  }

  //category card
  let movies = []
    for (let i = 0; i < 18; i++) {
        movies.push(data.results[i])
    }

  const DisplayCat = () => {
    cd.style.display = 'block'
  }

  const DisplayClose = () =>{
    cd.style.display = 'none'
  }

  const LoginForm = () => {
    if (window.innerWidth > 900) {
      login.style.display = 'block'
      console.log(login)
    }
  }

  const closeLogin = () => {
    if (window.innerWidth > 900) {
      login.style.display = 'none'
    }
  }



  return (
    <div className={styles.container}>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="hulu look-alike app made by osita ezeigbo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.logindiv}>
          <p className={styles.login} onClick={() => LoginForm()} >LOG IN</p>
          <form className={styles.loginform} ref={el => login = el}>
            <p className={styles.loginclose} ref={el => cont = el} onClick={() => closeLogin()}>x</p>
            <h4 className={styles.formtitle}>Log In</h4>
            <label>EMAIL</label><br/>
            <div className={styles.input}>
              <input className={styles.loginput} type="email" required name="email" /><br/>
            </div>
            <label>PASSWORD</label><br/>
            <div className={styles.input}>
              <input className={styles.loginput} type="password" required name="password" />
            </div>
            <p>Forgot your email or password?</p>
            <div className={styles.logcover}>
              <button type="submit" className={styles.loginbutton}>LOG IN</button>
            </div>
            <p>Don't have an account? Sign Up</p>
          </form>
        </div>

        <div className={styles.heroinfo}>
          <p className={styles.try}>TRY UP TO ONE MONTH FREE</p>
          <div className={styles.logodiv}>
            <Image src={'https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png'} loading="eager" width={270} height={90} />
          </div>
          <p className={styles.herowatch}>Watch thousands of shows and movies, with plans starting at $5.99/month.</p>
          <p className={styles.herohbo}>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</p>
          <button className={styles.trialbutton}>START YOUR FREE TRIAL</button>
          <p className={styles.trial}>Free trial for new & eligible returning subscribers only.</p>
        </div>

        <div className={styles.bottomhero}>
          <div className={styles.threelogos}>
            <Image src={'https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.png'} loading="eager" width={300} height={70} />
          </div>
          <div className={styles.herobundle}>
            <p className={styles.herobundle1}>BUNDLE WITH ANY HULU PLAN & SAVE</p>
            <p className={styles.herobundle2}><span className={styles.gettext}>Get Hulu, Disney+, and ESPN+ </span>starting at $13.99/month.</p>
            <a href="#" className={styles.herobundledetails}>Details</a>
          </div>
          <div className={styles.getbundlediv}>
            <button className={styles.getbundle}>GET BUNDLE</button>
            <a href="#" className={styles.terms}>Terms apply</a>
          </div>
        </div>

      </div>

      <div className={styles.categories}>
        <div className={styles.topcat}>
          <p className={styles.catinc}>INCLUDED IN ALL PLANS</p>
          <h1>All The TV You Love</h1>
          <p className={styles.catp}>Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
        </div>
        <div className={styles.categorywrapper}>
          <div className={styles.catcard} onClick={() => DisplayCat()}>
            <Image src='https://www.hulu.com/static/hitch/s3/attachments/ckllond4i0i9w1u7ghnu91j1b-bobsburgers-category-tile-294x450-1x.jpg' alt="" width={294} height={400} />
            <div className={styles.cattext}>
                <p className={styles.tag}>Past & Current Seasons</p>
                <h6 className={styles.category}>TV Shows</h6>
            </div>
          </div>

          <div className={styles.catcard} onClick={() => DisplayCat()}>
            <Image src='https://www.hulu.com/static/hitch/s3/attachments/cklms7f221g6z1u6ye8eurm1e-unitedstatesvsbillieholiday-category-tile-294x450-1x-1.jpg' alt="" width={294} height={400} />
            <div className={styles.cattext}>
                <p className={styles.tag}>New & Classic</p>
                <h6 className={styles.category}>Movies</h6>
            </div>
          </div>

          <div className={styles.catcard} onClick={() => DisplayCat()}>
            <Image src='https://www.hulu.com/static/hitch/s3/attachments/ckllpbyhp0pww1ua273ct30sb-solaropposites-category-tile-294x450-1x-1.jpg' alt="" width={294} height={400} />
            <div className={styles.cattext}>
                <p className={styles.tag}>Groundbreaking</p>
                <h6 className={styles.category}>Hulu Originals</h6>
            </div>
          </div>

          <div className={styles.catcard} onClick={() => DisplayCat()}>
            <Image src='https://www.hulu.com/static/hitch/s3/attachments/cklms8tz01g9l1ub0lnnjocwk-cityonahill-category-tile-294x450-1x-1.jpg' alt="" width={294} height={400} />
            <div className={styles.cattext}>
                <p className={styles.tag}>Add-on</p>
                <h6 className={styles.category}>Premium</h6>
          </div>
        </div>
        </div>
      </div>


      <div className={styles.catcontainer} ref={el => cd = el}>
            <div className={styles.pagetitle}>Movies<span className={styles.close} onClick={() => DisplayClose()}>X</span></div>
                <div className={styles.wrapper}>
                    <div className={styles.pagewrap}> 
                        <div className={styles.pagedetails}>
                            <h1>Movies</h1>
                            <p className={styles.details}>Stream box office hits, classic cinema, acclaimed indies, inspiring documentaries, and much more.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.latest}>Latest</h3>
                        <div className={styles.cardwrapper}>
                            {
                                movies.map((movie, index) => <div key={index} className={styles.innercardwrapper}>
                                    <Image src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} width={185} height={278} />
                                    <p className={styles.cardtitle}>{movie.title}</p>
                                    <p className={styles.cardrating}>Rating {movie.vote_average}</p>
                                    <p className={styles.carddetails}>{movie.overview}</p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
        </div>
      
      {/* <CategoryDisplay data={movies} ref={el => cd = el} />       */}
      <div className={styles.plans}>
        <div className={styles.planswrapper}>
          <div className={styles.head}>
            <div className={styles.headselect}>
              <h5 className={styles.sel}>Select Your Plan</h5>
              <p className={styles.topdetails}>No hidden fees, equipment rentals, or installation appointments.</p>
              <span className={styles.topdetails}><b>Switch plans or cancel anytime.**</b></span>
            </div>
            <div className={styles.headcardblock}>
            <div className={[styles.headcard, styles.item1].join(' ')}>
                <p className={styles.headmp}><b>MOST POPULAR</b></p>
                <h3 className={styles.headtitle}>Hulu</h3>
                <h4 className={styles.headoffer}>30 DAY FREE TRIAL</h4>
                <button className={styles.headbutton}><b>TRY FOR $0</b></button>
              
            </div>
            <div className={[styles.headcard, styles.headm, styles.item2].join(' ')}>
              
                <h3 className={styles.headtitle}>Hulu (No Ads)</h3>
                <h4 className={styles.headoffer}>30 DAY FREE TRIAL</h4>
                <button className={styles.headbutton}><b>TRY FOR $0</b></button>
              
            </div>
            <div className={[styles.headcard, styles.item3].join(' ')}>
              
                <h3 className={styles.headtitle}>Hulu + Live TV</h3>
                <h4 className={styles.headoffer}>30 DAY FREE TRIAL</h4>
                <button className={styles.headbutton}><b>TRY FOR $0</b></button>
              
            </div>
          </div>

        </div>
        <div>
            <LineSub title="Price after free trial" price1="$5.99/mo" price2="$11.99/mo" price3="$64.99/mo" />
            <LineSub title="Streaming Library with thousands of TV episodes and movies" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="Most new episodes the day after they air*" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="Access to award-winning Hulu Originals" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="Watch on your TV, laptop, phone, or tablet" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="Up to 6 user profilesUp to 6 user profiles" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="Watch on 2 different screens at the same time" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="No ads in streaming libraryNo ads in streaming library" price1="-" price2="&#10003;" price3="-" />
            <LineSub title="Download and watchDownload and watch" price1="-" price2="&#10003;" price3="-" />
            <LineSub title="Live TV with 75+ top channels. No cable required.Live TV with 75+ top channels. No cable required." price1="-" price2="-" price3="&#10003;" />
            <LineSub title="Live TV guide to navigate channels" price1="-" price2="-" price3="&#10003;" />
            <LineSub title="Record Live TV with 50 hours of Cloud DVR storage" price1="-" price2="-" price3="&#10003;" />
            <p className={styles.tiny}>
              *For current-season shows in the streaming library only<br/>
              **Switches from Live TV to Hulu take effect as of the next billing cycle
            </p>
          </div>

          <div className={styles.hideaddons} ref={el => addons = el}>
            <h5 className={styles.available}>Available Add-ons</h5>
            <p className={styles.available}>Add-ons available at an additional cost.<br/>
               Add them up after you sign up for Hulu.
            </p>
            <LineSub title="HBO Max™" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="CINEMAX®" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="SHOWTIME™" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="STARZ™" price1="&#10003;" price2="&#10003;" price3="&#10003;" />
            <LineSub title="Unlimited Screens" price1="-" price2="-" price3="&#10003;" />
            <LineSub title="Enhanced Cloud DVR" price1="-" price2="-" price3="&#10003;" />
            <LineSub title="Entertainment Add-on" price1="-" price2="-" price3="&#10003;" />
            <LineSub title="Espanol Add-on" price1="-" price2="-" price3="&#10003;" />
            
          </div>
          <div>
              <p className={styles.addons} onClick={() => ToggleAddons()}>Hide Add-ons</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a9a890a1db5db1cb0dfbcdffbce0b762&language=en-US&page=1')
    const data = await res.json()

    return{
      props: {
        data
      }
    }
}