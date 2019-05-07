import Link from 'next/link'
import Icon from './icon'

const Header = () => (
  <div className="header-wrap">
    <div className="title">
      <Icon icon="icon-github" height="30" width="30"></Icon>
    </div>
    <div className="link-wrap">
      <Link href="/">
        <a className="link">Post</a>
      </Link>
      <Link href="/moment">
        <a className="link">Moment</a>
      </Link>
    </div>
    <style jsx>{`
      .header-wrap {
        width: 100%;
        display: flex;
        align-items: center;
        height: 60px;
      }
      .title {
        font-size: 20px;
        font-weight: 600;
      }
      .link-wrap {
        
      }
      .link {
        margin-left: 30px;
        color: #222222;
        font-weight: 600;
      }
    `}</style>
  </div>
)

export default Header