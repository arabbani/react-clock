import { Clock } from './pages/Clock';

function App() {
  return (
    <div className="mx-auto max-w-5xl sm:container">
      <div className="flex grow justify-center">
        <div className="h-screen w-full sm:w-3/6 md:w-2/5 lg:w-3/12">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
