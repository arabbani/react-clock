import { Clock } from './Clock';

function App() {
  return (
    <div className="flex h-full items-center justify-center bg-alpha-500">
      <div className="h-full w-full shadow-lg md:h-5/6 md:w-2/5 lg:w-4/12 xl:w-1/4 2xl:w-1/6">
        <Clock />
      </div>
    </div>
  );
}

export default App;
