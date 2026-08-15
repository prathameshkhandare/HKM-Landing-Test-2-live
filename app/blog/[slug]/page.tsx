import { notFound } from "next/navigation"
import { supabase } from "@/lib/supabase"
import Navbar from "@/components/Navbar"
import Footer from "@/components/FooterSection"
import BlogRenderer from "./BlogRenderer"

export const runtime = 'edge'
export const revalidate = 60

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { data } = await supabase
        .from("blogs")
        .select("title, excerpt, hero_image")
        .eq("slug", params.slug)
        .eq("status", "published")
        .maybeSingle()

    if (!data) return {}

    return {
        title: data.title,
        description: data.excerpt,
        openGraph: {
            title: data.title,
            description: data.excerpt,
            images: data.hero_image ? [data.hero_image] : [],
        },
    }
}

export default async function DynamicBlogPage({ params }: { params: { slug: string } }) {
    const { data: blog } = await supabase
        .from("blogs")
        .select("*, categories(id, name, slug)")
        .eq("slug", params.slug)
        .eq("status", "published")
        .maybeSingle()

    if (!blog) notFound()

    return (
        <main className="min-h-screen bg-[#F5EEE0]">
            <Navbar />
            <div className="pt-20">
                <BlogRenderer blog={blog} />
            </div>
            <Footer />
        </main>
    )
}
