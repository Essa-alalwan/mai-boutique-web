import { notFound } from "next/navigation";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "M.A.I Clothing & Perfumes" };
  return {
    title: `${product.name.en} — M.A.I Clothing & Perfumes`,
    description: product.description.en,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(slug, 4);

  return <ProductDetailClient product={product} related={related} />;
}
