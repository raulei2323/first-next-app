import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="border-2 border-teal-500">
        <div className="bg-teal-500 w-full text-center text-black font-bold">Hola desde el document</div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
