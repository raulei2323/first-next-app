import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col gap-2">
      <Link href="/hola">Hola Page</Link>
      <Link href="/productos/123">Producto 123</Link>
      <button
        onClick={() => {
          router.push("/productos");
        }}
      >
        Ir a la pagina de productos
      </button>
    </main>
  );
}
