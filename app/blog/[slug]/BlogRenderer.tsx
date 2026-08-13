import Image from "next/image"
import FaqSection from "./FaqSection"

interface ContentBlock {
    type: string
    [key: string]: any
}

function renderBlock(block: ContentBlock, idx: number) {
    switch (block.type) {
        case "heading":
            return (
                <h2 key={idx} className="text-2xl md:text-3xl font-bold font-serif text-[#2D0A0A] mt-12 mb-5 leading-tight">
                    {block.text || block.content}
                </h2>
            )

        case "paragraph":
            return (
                <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-[1.05rem]">
                    {block.text || block.content}
                </p>
            )

        case "image":
            return (
                <figure key={idx} className="my-10">
                    <img
                        src={block.src || block.url}
                        alt={block.alt || ""}
                        className="w-full rounded-2xl object-cover shadow-md"
                        style={{ maxHeight: "520px" }}
                    />
                    {block.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            )

        case "image-text": {
            const isLeft = block.imagePosition === "left"
            return (
                <div key={idx} className={`my-10 flex flex-col md:flex-row gap-8 items-center ${isLeft ? "" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2 flex-shrink-0">
                        <img
                            src={block.src || block.url}
                            alt={block.alt || ""}
                            className="w-full rounded-2xl object-cover shadow-md"
                        />
                        {block.caption && (
                            <p className="text-center text-sm text-gray-500 mt-2 italic">{block.caption}</p>
                        )}
                    </div>
                    <div className="md:w-1/2 text-gray-700 leading-relaxed text-[1.05rem]">
                        {block.text || block.content}
                    </div>
                </div>
            )
        }

        case "quote":
            return (
                <blockquote key={idx} className="my-10 border-l-4 border-[#FFB81C] bg-[#FFF9F0] rounded-r-2xl px-8 py-6">
                    <p className="text-[#2D0A0A] text-xl font-serif italic leading-relaxed mb-3">
                        &ldquo;{block.text || block.content}&rdquo;
                    </p>
                    {block.attribution && (
                        <cite className="text-[#b45309] font-semibold not-italic text-sm">— {block.attribution}</cite>
                    )}
                </blockquote>
            )

        case "scripture":
            return (
                <div key={idx} className="my-10 bg-gradient-to-br from-[#FFF9F0] to-[#FEF3C7] border border-[#FFB81C]/40 rounded-2xl px-8 py-6 shadow-sm">
                    {block.sanskrit && (
                        <p className="text-[#701a1a] font-serif text-lg italic mb-3 leading-relaxed">
                            {block.sanskrit}
                        </p>
                    )}
                    {(block.text || block.translation) && (
                        <p className="text-gray-700 leading-relaxed mb-2">
                            {block.translation || block.text || block.content}
                        </p>
                    )}
                    {block.source && (
                        <p className="text-sm text-[#b45309] font-semibold mt-3">— {block.source}</p>
                    )}
                </div>
            )

        case "gallery":
            return (
                <div key={idx} className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {(block.images || []).map((img: any, i: number) => (
                        <figure key={i}>
                            <img
                                src={typeof img === "string" ? img : img.src || img.url}
                                alt={typeof img === "object" ? img.alt || "" : ""}
                                className="w-full h-52 object-cover rounded-xl shadow-sm"
                            />
                            {typeof img === "object" && img.caption && (
                                <figcaption className="text-center text-xs text-gray-500 mt-1">{img.caption}</figcaption>
                            )}
                        </figure>
                    ))}
                </div>
            )

        case "divider":
            return (
                <div key={idx} className="my-10 flex items-center gap-4">
                    <div className="flex-1 h-px bg-[#FFB81C]/30" />
                    <span className="text-[#FFB81C] text-xl">✦</span>
                    <div className="flex-1 h-px bg-[#FFB81C]/30" />
                </div>
            )

        case "video": {
            const url: string = block.url || block.src || ""
            const embedUrl = url.includes("youtube.com/watch")
                ? url.replace("watch?v=", "embed/")
                : url.includes("youtu.be/")
                ? url.replace("youtu.be/", "www.youtube.com/embed/")
                : url
            return (
                <div key={idx} className="my-10 aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src={embedUrl}
                        title={block.title || "Video"}
                        className="w-full h-full"
                        allowFullScreen
                    />
                </div>
            )
        }

        case "callout":
            return (
                <div key={idx} className="my-8 bg-[#FFB81C]/10 border-l-4 border-[#FFB81C] rounded-r-xl px-6 py-5 flex gap-4">
                    {block.icon && <span className="text-2xl flex-shrink-0">{block.icon}</span>}
                    <div>
                        {block.title && <p className="font-bold text-[#2D0A0A] mb-1">{block.title}</p>}
                        <p className="text-gray-700 leading-relaxed">{block.text || block.content}</p>
                    </div>
                </div>
            )

        case "toc":
            return (
                <nav key={idx} className="my-10 bg-[#FFF9F0] border border-[#FFB81C]/30 rounded-2xl p-6">
                    <p className="font-bold text-[#2D0A0A] mb-4 font-serif text-lg">Table of Contents</p>
                    <ol className="list-decimal list-inside space-y-2">
                        {(block.items || []).map((item: string, i: number) => (
                            <li key={i} className="text-[#ea580c] hover:text-[#b45309] transition-colors">
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ol>
                </nav>
            )

        case "quick-facts":
            return (
                <div key={idx} className="my-10 bg-gradient-to-br from-[#FFF9F0] to-white border border-[#FFB81C]/30 rounded-2xl p-6 shadow-sm">
                    <p className="font-bold text-[#2D0A0A] mb-4 font-serif text-lg">Quick Facts</p>
                    <dl className="space-y-3">
                        {(block.facts || block.items || []).map((fact: any, i: number) => (
                            <div key={i} className="flex gap-3">
                                <dt className="font-semibold text-[#b45309] flex-shrink-0 min-w-[120px]">
                                    {fact.label || fact.key}:
                                </dt>
                                <dd className="text-gray-700">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            )

        default:
            // Render unknown blocks as plain text if they have content
            if (block.text || block.content) {
                return (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                        {block.text || block.content}
                    </p>
                )
            }
            return null
    }
}

interface Blog {
    id: string
    title: string
    subtitle?: string
    excerpt?: string
    author?: string
    read_time?: string
    published_at?: string
    hero_image?: string
    hero_alt?: string
    hero_caption?: string
    content?: ContentBlock[]
    faq?: { question: string; answer: string }[]
    categories?: { name: string; slug: string }
}

function formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return ""
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
}

export default function BlogRenderer({ blog }: { blog: Blog }) {
    const blocks: ContentBlock[] = Array.isArray(blog.content) ? blog.content : []
    const faqItems = Array.isArray(blog.faq) ? blog.faq : []

    return (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 pb-20">
            {/* Header */}
            <header className="mb-10">
                {blog.categories?.name && (
                    <span className="inline-block bg-[#FFB81C]/20 text-[#b45309] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                        {blog.categories.name}
                    </span>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#2D0A0A] leading-tight mb-6">
                    {blog.title}
                </h1>
                {blog.subtitle && (
                    <p className="text-xl text-gray-600 font-serif mb-6 leading-relaxed">{blog.subtitle}</p>
                )}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 border-t border-b border-[#FFB81C]/20 py-4">
                    {blog.author && (
                        <span className="font-semibold text-[#2D0A0A]">By {blog.author}</span>
                    )}
                    {blog.published_at && (
                        <span>{formatDate(blog.published_at)}</span>
                    )}
                    {blog.read_time && (
                        <span>{blog.read_time} read</span>
                    )}
                </div>
            </header>

            {/* Hero Image */}
            {blog.hero_image && (
                <figure className="mb-12">
                    <img
                        src={blog.hero_image}
                        alt={blog.hero_alt || blog.title}
                        className="w-full rounded-2xl object-cover shadow-lg"
                        style={{ maxHeight: "500px" }}
                    />
                    {blog.hero_caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                            {blog.hero_caption}
                        </figcaption>
                    )}
                </figure>
            )}

            {/* Excerpt (if no content blocks yet) */}
            {blocks.length === 0 && blog.excerpt && (
                <p className="text-gray-700 leading-relaxed text-lg">{blog.excerpt}</p>
            )}

            {/* Content Blocks */}
            <div className="prose-custom">
                {blocks.map((block, i) => renderBlock(block, i))}
            </div>

            {/* FAQ */}
            <FaqSection items={faqItems} />
        </article>
    )
}
