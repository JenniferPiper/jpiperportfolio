import DataStore from 'flux/stores/DataStore';
import { renderToStaticMarkup } from 'react-dom/server';

class Home extends React.Component {
  render() {
    let allData = DataStore.getAll();
    console.log('allData: ', allData);
    let page = DataStore.getPageBySlug('lorem');
    return(
      <div>
        <h1>{page.title.rendered}</h1>
        <p dangerouslySetInnerHTML={{ __html: page.content.rendered}}></p>
      </div>
    );
  }
}

export default Home;