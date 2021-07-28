import * as React from 'react';
import './index.scss';
const data = [
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
  {title : "Trang", img : "http://dummyimage.com/103x103.png/5fa2dd/ffffff"},
];
export default function CatalogChannel(){
  const [totalPages, setTotalPages] = React.useState(1);
  const [channelList, setChannelList] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const perPage = 3;
    const begin = (page-1) * perPage;
    const end = page * perPage;
    const items = data.slice(begin, end);
    setTotalPages(Math.ceil(data.length/perPage));
    setChannelList([...channelList, ...items]);
    setLoading(false);
    // eslint-disable-next-line
  }, [page]);
  return(
    <div className='ex4'>
      <h3 className="title">Subscriptions</h3>
      <div className="containers">
        { channelList.map((x, i) => {
          return(
            <div className='box' key={i}>
              <div className="avatar">
                <img
                  src={x.img}
                  alt='Avatar Channel'
                />
              </div>
              <div className="title-channel">{x.title}</div>
              <button className="btn-subscribe">SUBSCRIBE</button>
            </div>
          );
        })}
      </div>
      { totalPages !== page &&
        <div className="btn-load-more">
          <button
            onClick={() => setPage(page+1) }
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      }
    </div>
  );
}