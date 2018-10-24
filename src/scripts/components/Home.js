import DataStore from 'flux/stores/DataStore';

class Home extends React.Component {
  render() {
    let allData = DataStore.getAll();
    console.log(allData);
    return (
      <div>
        <h2>Woo, it works!?</h2>
      </div>
    );
  }
}

export default Home;