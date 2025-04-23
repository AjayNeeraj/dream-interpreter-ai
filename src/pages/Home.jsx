export default function Home() {
    return (
      <div className="max-w-xl mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">AI Dream Interpreter</h1>
        <textarea
          className="w-full p-4 border rounded-md"
          placeholder="Type your dream here..."
        ></textarea>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Interpret Dream
        </button>
      </div>
    );
  }
  