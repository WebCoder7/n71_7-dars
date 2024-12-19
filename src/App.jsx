import { QueryClient, QueryClientProvider } from "react-query";
import CreateData from "./components/CreateData";
import DataList from "./components/DataList";
import "./App.css"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <div>
          <h1>React query redux middleware</h1>
          <CreateData />
          <DataList />
        </div>

      </div>
    </QueryClientProvider>
  );
};

export default App;
