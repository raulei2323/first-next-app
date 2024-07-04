import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main>
      <div>
        <h1 className="bg-pink-500 w-full text-center">Hola desde app</h1>
      </div>
      <Component {...pageProps} />;
    </main>
  );
}
