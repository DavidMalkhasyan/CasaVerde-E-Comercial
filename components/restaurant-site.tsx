'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Clock3, MapPin, Menu, Phone, Star, X } from 'lucide-react'

const categories = ['All', 'Small plates', 'Mains', 'Pasta', 'Desserts']
const dishes = [
  { name: 'Charred octopus', description: 'White bean, preserved lemon, smoked paprika', price: '$18', category: 'Small plates', image: '/hero-table.png' },
  { name: 'Wild mushroom pappardelle', description: 'Sage, parmesan, brown butter', price: '$24', category: 'Pasta', image: '/dish-pasta.png' },
  { name: 'Coal-roasted sea bass', description: 'Fennel, orange, salsa verde', price: '$29', category: 'Mains', image: '/hero-table.png' },
  { name: 'Olive oil cake', description: 'Citrus curd, rosemary cream', price: '$12', category: 'Desserts', image: '/dish-pasta.png' },
]

function Button({ children, light = false, href = '#' }: { children: React.ReactNode; light?: boolean; href?: string }) {
  return <a href={href} className={`inline-flex items-center gap-3 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-transform hover:-translate-y-0.5 ${light ? 'bg-[#f4efe6] text-[#21372d]' : 'bg-[#d96843] text-[#fff8ed]'}`}>{children}<ArrowUpRight size={15} /></a>
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d96843]">{children}</p>
}

export function RestaurantSite() {
  const [open, setOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? dishes : dishes.filter((dish) => dish.category === activeCategory)

  return <div className="min-h-screen overflow-hidden bg-[#f4efe6] text-[#21372d]">
    <header className="absolute inset-x-0 top-0 z-40 px-5 py-5 text-[#fff8ed] md:px-10 md:py-7">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between border-b border-white/30 pb-5">
        <a href="#top" className="font-serif text-2xl italic tracking-[-0.06em]">Casa / Verde</a>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.16em] md:flex">
          <a href="#menu" className="transition-opacity hover:opacity-60">Menu</a><a href="#story" className="transition-opacity hover:opacity-60">Our story</a><a href="#gallery" className="transition-opacity hover:opacity-60">Gallery</a><a href="#visit" className="transition-opacity hover:opacity-60">Visit</a>
        </nav>
        <div className="flex items-center gap-3"><a href="#menu" className="hidden border border-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#21372d] sm:block">View menu</a><button aria-label="Open navigation" onClick={() => setOpen(true)} className="border border-white/60 p-2 md:hidden"><Menu size={18} /></button></div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-50 bg-[#21372d] p-6 text-[#fff8ed] md:hidden"><div className="flex items-center justify-between"><span className="font-serif text-2xl italic">Casa / Verde</span><button aria-label="Close navigation" onClick={() => setOpen(false)}><X /></button></div><nav className="mt-24 flex flex-col gap-7 font-serif text-5xl"><a onClick={() => setOpen(false)} href="#menu">Menu</a><a onClick={() => setOpen(false)} href="#story">Our story</a><a onClick={() => setOpen(false)} href="#gallery">Gallery</a><a onClick={() => setOpen(false)} href="#visit">Visit</a></nav><div className="mt-16"><Button light href="#menu">View menu</Button></div></div>}

    <main id="top">
      <section className="relative flex min-h-[780px] items-end bg-[#21372d] px-5 pb-14 pt-36 text-[#fff8ed] md:min-h-[850px] md:px-10 md:pb-20">
        <img src="/hero-table.png" alt="A table filled with colorful Mediterranean dishes" className="absolute inset-0 size-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21372d] via-[#21372d]/25 to-[#21372d]/20" />
        <div className="relative mx-auto grid w-full max-w-[1320px] gap-10 md:grid-cols-[1fr_300px] md:items-end"><div><p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#f0a080]">Mediterranean kitchen · Yerevan</p><h1 className="max-w-4xl font-serif text-[clamp(4.5rem,11vw,10.5rem)] leading-[0.82] tracking-[-0.075em]">Good food.<br /><em className="font-light">Good company.</em></h1></div><div className="max-w-xs border-l border-white/50 pl-5 text-sm leading-6 text-white/80"><p>Fresh, sun-warmed cooking for long evenings and the people you want around your table.</p><div className="mt-7"><Button light href="#menu">Explore the menu</Button></div></div></div>
      </section>

      <section id="story" className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-36"><div><SectionLabel>01 / The idea</SectionLabel><h2 className="max-w-md font-serif text-5xl leading-[0.95] tracking-[-0.055em] md:text-7xl">A little bit of the coast, right in the city.</h2></div><div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end"><p className="max-w-md text-lg leading-8 text-[#5d685f]">Casa Verde is a neighborhood table inspired by the Mediterranean — generous plates, good olive oil, and the kind of welcome that makes one more drink feel like the obvious choice.</p><img src="/restaurant-interior.png" alt="Warm, intimate restaurant interior with wood and pendant lights" className="aspect-[4/5] w-full object-cover md:aspect-[3/4]" /></div></section>

      <section id="menu" className="bg-[#e8dfd2] px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-[1320px]"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><SectionLabel>02 / From the kitchen</SectionLabel><h2 className="font-serif text-5xl leading-none tracking-[-0.055em] md:text-7xl">A few favorites</h2></div><Button href="#full-menu">View full menu</Button></div><div className="mt-14 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Menu categories">{categories.map((category) => <button key={category} role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${activeCategory === category ? 'border-[#21372d] bg-[#21372d] text-[#fff8ed]' : 'border-[#b8afa3] text-[#5d685f] hover:border-[#21372d]'}`}>{category}</button>)}</div><div className="mt-9 grid gap-x-8 gap-y-14 md:grid-cols-2">{filtered.map((dish, i) => <article key={dish.name} className="group grid gap-5 sm:grid-cols-[180px_1fr]"><div className="aspect-square overflow-hidden bg-[#d4c7b8]"><img src={dish.image} alt={dish.name} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="flex flex-col justify-between"><div><div className="flex items-start justify-between gap-4 border-b border-[#b8afa3] pb-3"><h3 className="font-serif text-2xl tracking-[-0.03em]">{dish.name}</h3><span className="font-serif text-lg">{dish.price}</span></div><p className="mt-3 max-w-xs text-sm leading-6 text-[#687269]">{dish.description}</p></div><span className="mt-5 text-[10px] uppercase tracking-[0.18em] text-[#d96843]">0{i + 1} / {dish.category}</span></div></article>)}</div></div></section>

      <section id="gallery" className="px-5 py-24 md:px-10 md:py-36"><div className="mx-auto max-w-[1320px]"><div className="grid items-end gap-10 md:grid-cols-[1fr_0.75fr]"><div><SectionLabel>03 / At the table</SectionLabel><h2 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.055em] md:text-8xl">Come hungry.<br /><em className="font-light">Stay awhile.</em></h2></div><p className="max-w-sm text-base leading-7 text-[#687269]">The room is warm, the playlist is low, and the kitchen keeps the good things coming.</p></div><div className="mt-16 grid gap-5 md:grid-cols-[1.35fr_0.65fr] md:items-end"><img src="/restaurant-interior.png" alt="Casa Verde dining room" className="aspect-[16/9] w-full object-cover" /><div className="grid gap-5"><img src="/dish-pasta.png" alt="Handmade pappardelle with mushrooms" className="aspect-square w-full object-cover" /><p className="text-xs uppercase tracking-[0.15em] text-[#687269]">Dinner, every day / 11:00 — late</p></div></div></div></section>

      <section className="bg-[#21372d] px-5 py-24 text-[#fff8ed] md:px-10 md:py-32"><div className="mx-auto max-w-[1320px]"><SectionLabel>04 / Kind words</SectionLabel><div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end"><blockquote className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] md:text-7xl">“The sort of place where dinner becomes a whole evening. Every plate felt generous.”</blockquote><div className="border-l border-white/30 pl-5 text-sm text-white/70"><div className="mb-4 flex gap-1 text-[#f0a080]" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div><p className="uppercase tracking-[0.16em]">Mariam A. / Local guide</p></div></div></div></section>

      <section id="visit" className="grid bg-[#d96843] text-[#fff8ed] md:grid-cols-2"><div className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-[570px] md:mr-0"><SectionLabel>05 / Find us</SectionLabel><h2 className="font-serif text-6xl leading-[0.9] tracking-[-0.06em] md:text-8xl">Your table<br /><em className="font-light">is waiting.</em></h2><div className="mt-12 grid gap-8 border-t border-white/40 pt-7 sm:grid-cols-2"><div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">Address</p><p className="leading-7">12 Abovyan Street<br />Yerevan, Armenia</p></div><div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">Hours</p><p className="leading-7">Mon — Fri · 11:00 — 23:00<br />Sat — Sun · 10:00 — 00:00</p></div></div><div className="mt-9 flex flex-wrap gap-3"><Button light href="https://maps.google.com">Get directions</Button><a href="tel:+37410555555" className="inline-flex items-center gap-3 border border-white/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#d96843]"><Phone size={15} /> Call us</a></div></div></div><div className="min-h-[430px] bg-[#c65e3d]"><img src="/hero-table.png" alt="Shared Mediterranean dinner table" className="size-full object-cover opacity-80 mix-blend-multiply" /></div></section>
    </main>

    <footer className="bg-[#f4efe6] px-5 py-10 md:px-10"><div className="mx-auto grid max-w-[1320px] gap-10 border-b border-[#cfc7bc] pb-10 md:grid-cols-[1.4fr_1fr_1fr_0.8fr]"><div><p className="font-serif text-3xl italic tracking-[-0.05em]">Casa / Verde</p><p className="mt-4 max-w-xs text-sm leading-6 text-[#687269]">Fresh Mediterranean cooking, warm light, and an open table in the heart of Yerevan.</p></div><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d96843]">Explore</p><div className="flex flex-col gap-3 text-sm"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#gallery">Gallery</a></div></div><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d96843]">Contact</p><div className="flex flex-col gap-3 text-sm"><a href="tel:+37410555555">+374 10 55 55 55</a><a href="mailto:hello@casaverde.am">hello@casaverde.am</a><a href="#visit">12 Abovyan Street</a></div></div><div><p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d96843]">Follow along</p><a href="#instagram" aria-label="Instagram" className="inline-flex items-center gap-2 text-sm">Instagram ↗</a></div></div><div className="mx-auto flex max-w-[1320px] justify-between pt-6 text-[10px] uppercase tracking-[0.16em] text-[#687269]"><span>© 2025 Casa Verde</span><span className="hidden sm:block">Made for long lunches</span></div></footer>
  </div>
}

export function DirectionStrip() { return <div className="border-y border-[#cfc7bc] bg-[#f4efe6] px-5 py-10 md:px-10"><div className="mx-auto grid max-w-[1320px] gap-4 text-[11px] uppercase tracking-[0.15em] text-[#687269] md:grid-cols-3"><div><span className="text-[#d96843]">A / </span>Modern bistro · warm editorial</div><div><span className="text-[#d96843]">B / </span>Dark premium · intimate contrast</div><div><span className="text-[#d96843]">C / </span>Minimal contemporary · quiet space</div></div></div> }

export function Utilities() { return <div className="sr-only"><Clock3 /><MapPin /><ArrowDownRight /></div> }

export default RestaurantSite
