import React from 'react';
import App, { Container } from 'next/app'
import dynamic from 'next/dynamic'
if (typeof window !== 'undefined') { require('../util/iconfont') }
const Doodle = dynamic(
  () => import('../components/doodle'),
  {
    ssr: false
  }
)

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
        <div className="doodle-wrap">
          <Doodle rule={`
            :doodle {
              @grid: 7 / 100%;
            }
            @size: .8em;
            background: hsla(calc(10 * @index()), 60%, 60%, .2);
            clip-path: polygon( 50% 0, 100% 100%, 0 100%);
            transform:
              rotate(@rand(360deg))
              scale(@rand(.6, 1, .1))
              translate(
                @rand(-10em, 10em),
                @rand(-10em, 10em)
              )
          `}></Doodle>
        </div>
        <style jsx>{`
          .doodle-wrap {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp