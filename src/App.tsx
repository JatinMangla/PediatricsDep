
import Header from './component/Header';
import Table from './component/Table';

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container mx-auto p-4">
      <Table />
    </main>
  </div>
);

export default App;
