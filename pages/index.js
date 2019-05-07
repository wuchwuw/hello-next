import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Icon from '../components/icon'

const Doodle = dynamic(
  () => import('../components/doodle'),
  {
    ssr: false
  }
)

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js 😀', tag: 'HTML/CSS', time: '2012-2-3 12:23:22' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome', tag: 'Vue', time: '2012-2-3 12:23:22' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT', tag: 'React', time: '2012-2-3 12:23:22' }
  ]
}

function getTags () {
  return [
    { tag: 'HTML/CSS' },
    { tag: 'Javascript' },
    { tag: 'Vue' },
    { tag: 'React' }
  ]
}

const Tags = ({ tags }) => (
  <div className="tag-wrap">
    <div className="tag-item active">All</div>
    {
      getTags().map((item, index) => (
        <div key={index} className="tag-item"><TagIcon tag={item.tag} size={15}></TagIcon><span className="tag-text">{item.tag}</span></div>
      ))
    }
    <style jsx>{`
      .tag-wrap {
        display: flex;
      }
      .tag-item {
        padding: 7px 15px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        margin-right: 15px;
        cursor: pointer;
      }
      .tag-item.active {
        background: #FFBAB3;
        color: #fff;
      }
      .tag-text {
        margin-left: 5px;
      }
    `}</style>
  </div>
)

const TagIcon = ({tag, size = 20}) => {
  tag = tag.toLowerCase()
  let iconName = `icon-${tag}`
  switch (tag) {
    case 'html/css':
      iconName = 'icon-html'
      break
    case 'javascript':
      iconName = 'icon-js'
      break
    default:
      break
  }
  return (
    <Icon icon={iconName} height={size} width={size}></Icon>
  )
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/post/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <div className="post-info-wrap">
      <span className="post-time">{post.time}</span>
      <TagIcon tag={post.tag} size="15"></TagIcon>
      <span>{post.tag}</span>
    </div>
    <style jsx>{`
      li {
        margin-bottom: 20px;
      }
      a {
        text-decoration: none;
        color: #222222;
        font-family: 'Arial';
        font-size: 20px;
      }
      a:hover {
        opacity: 0.6;
      }
      .post-info-wrap {
        margin-top: 8px;
        display: flex;
        align-items: center;
      }
      .post-time {
        color: #666666;
        margin-right: 10px;
      }
    `}</style>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <Tags></Tags>
      <ul className="post-wrap">
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }

        .doodle-wrap {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: -1;
        }
        .post-wrap {
          margin-top: 30px;
        }
      `}</style>
    </Layout>
  )
}