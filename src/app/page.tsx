import { getProducts } from "@/lib/products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main style={{ padding: 30 }}>
      <h1>Roman Zupa Store 🔥</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: 20,
        marginTop: 30
      }}>
        {products.map((p: any) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: 10 }}>
            <img src={p.image} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>{p.price} zł</p>
          </div>
        ))}
      </div>
    </main>
  );
}
