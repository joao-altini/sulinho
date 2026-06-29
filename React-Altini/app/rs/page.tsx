import Link from 'next/link';

export default function RioGrandeDoSulPage() {
  return (
    <div>
        <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeED1rVP0FDUjUgzfdhISsmmUP9DwZc9pxNXK4oLQwBg&s=10"
      alt="Fundo"
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    />
        <main className="min-h-screen text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">

        <header className="relative bg-gradient-to-r from-emerald-800 to-teal-900 py-16 px-6 text-center text-white shadow-md">
            <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl">
                Rio Grande do Sul
            </h1>
            </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">

            <section className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-slate-900">
                Povos Originários
                </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Antes da chegada dos colonizadores, o território gaúcho era habitado
                por diversos povos indígenas, como os{" "}
                <strong className="text-slate-900 font-semibold">
                Guaranis, Kaingangs e Charruas
                </strong>
                . Esses povos viviam da caça, da pesca, da coleta e da agricultura,
                mantendo uma forte relação com a natureza.
            </p>
            </section>

            <section className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">
                Identidade e Cultura
                </h2>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                A cultura do Rio Grande do Sul é marcada pela tradição gaúcha e pela
                influência de imigrantes europeus, principalmente italianos e
                alemães. O estado é conhecido pelo chimarrão, churrasco, danças
                tradicionais e festas típicas, preservando costumes que fazem parte
                da identidade do povo gaúcho.
            </p>
            </section>

            <footer className="pt-6 border-t border-slate-200 text-center">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
            >
                <span>←</span> Voltar para o Início
            </Link>
            </footer>

        </div>
        </main>
    </div>
  );
}