import Layout from '../components/MyLayout.js'
import Icon from '../components/icon'

function getMoment () {
  return [
    { title: 'today todaytodaytodaytodaytodaytodaytoday', 
      location: 'GuangZhou', 
      images: [
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg'
        ],
      time: '2011-01-02'
    },
    { title: 'today todaytodaytodaytodaytodaytodaytoday', 
      location: 'GuangZhou', 
      images: [
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg'
        ],
      time: '2011-01-02'
    },
    { title: 'today todaytodaytodaytodaytodaytodaytoday', 
      location: 'GuangZhou', 
      images: [
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg', 
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg',
        'https://chenfengyuan.com/photos/the-snowy-west-lake/thumbnails/the-snowy-west-lake-1.jpg'
        ],
      time: '2011-01-02'
    }
  ]
}

export default function Blog() {
  return (
    <Layout>
      <div>
        <h2>Record Moment 😛</h2>
        <ul>
          {
            getMoment().map((item, index) => (
              <li key={index} className="moment-wrap">
                <div className="title">{item.title}</div>
                <div className="moment-info">
                  <Icon icon="icon-location" height="20" width="20"></Icon>
                  &nbsp;
                  <span>{item.location}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Icon icon="icon-date" height="20" width="20"></Icon>
                  &nbsp;
                  <span>{item.time}</span>
                </div>
                <div className="image-wrap">
                  {
                    item.images.map((image, index) => (
                      <img className="image-item" src={image} key={index} alt=""/>
                    ))
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <style jsx>{`
        .title {
          font-size: 20px;
        }
        .moment-wrap {
          width: 800px;
        }
        .image-wrap {
          margin-top: 10px;
          margin-bottom: 30px;
        }
        .image-item {
          height: 200px;
          width: 200px;
          margin-right: 5px;
        }
        .moment-info {
          display: flex;
          align-items: center;
          margin-top: 10px;
          color: #666666;
        }
      `}</style>
    </Layout>
  )
}