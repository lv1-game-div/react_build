import React, {useState, useEffect} from "react";
import axios from "axios";

const YOUTUBE_API_KEY = process.env.REACT_APP_API_KEY;

export default function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("hololive");

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${keyword}&maxResults=5&key=${YOUTUBE_API_KEY}`;
    axios.get(url)
      .then(res => {
        setData(res.data.items);
        console.log(res.data.items);
      })
      .catch(err => {
        console.log("error: ",err);
      })
  }, [keyword])


  return (
    <div className="content">
      <h1>Youtube Data API</h1>
      <p>This is YoutubeDataAPI app.</p>
      <input type="text" onChange={() => setKeyword(keyword)} defaultValue={keyword} />
      <table>
        <tbody>
            {data.map((value, key) => (
              <tr key={value.id.videoId}>
                <td>
                  <img src={value.snippet.thumbnails.default.url} alt={value.snippet.title} height={value.snippet.thumbnails.default.height+10} width={value.snippet.thumbnails.default.width+10} />
                </td>
                <td>
                  <h3>{value.snippet.title}</h3>
                  <p>{value.snippet.description}</p>
                </td>
                <td>
                  <span>by {value.snippet.channelTitle}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
