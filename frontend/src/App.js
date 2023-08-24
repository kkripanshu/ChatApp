import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact /> {/* Change 'components' to 'component' */}
      <Route path="/chats" component={ChatPage} /> {/* Change 'components' to 'component' */}
    </div>
  );
}

export default App;
