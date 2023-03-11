import { Clock } from './Clock';

function App() {
  return (
    <div className="flex h-full grow items-center justify-center bg-alpha-500">
      <div className="h-full w-full shadow-lg md:h-5/6 md:w-3/4 lg:w-1/4">
        <Clock />
      </div>
    </div>
  );
}

export default App;
