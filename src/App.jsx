import AuthRoutes from './routes/AuthRoutes';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-gray-300 to-cyan-200 dark:bg-gradient-to-br dark:from-cyan-900 dark:via-gray-800 dark:to-cyan-800 dark:text-gray-100">
      {/* <div className="flex-1 w-full mx-auto max-w-screen-2xl px-2 sm:px-4 md:px-8"> */}
        <AuthRoutes />
      {/* </div> */}
    </div>
  );
};

export default App;