import Link from 'next/link';

export default function SantaCatarinaPage() {
  return (
    <div>
      <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiS0iW09O0N_4SmlG0orSW5U0cXhhXWc0tACDwEjHcyQ&s=10"
      alt="Fundo"
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
    />


      <main className="min-h-screen text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        
        
        <header className="relative bg-gradient-to-r from-emerald-800 to-teal-900 py-16 px-6 text-center text-white shadow-md">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl">
              Santa Catarina
            </h1>
          </div>
        </header>

    
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-10">
          
          <section className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-slate-900">Povos Originários</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Antes da chegada dos colonizadores, o território catarinense era habitado por ricas culturas indígenas, destacando-se os povos <strong className="text-slate-900 font-semibold">Carijós, Caingangues e Xoklengs</strong>. Eles viviam em profunda harmonia com a natureza, subsistindo da caça, da pesca e de uma agricultura integrada ao ecossistema local.
            </p>
          </section>

          

          {/* Cultura */}
          <section className="bg-slate-900 text-slate-100 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            {/* Detalhe estético de fundo */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-bold text-white">Identidade e Cultura</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              A cultura catarinense se destaca pela sua pluralidade. Ela une de forma singular a herança dos povos indígenas com o folclore açoriano do litoral e as festividades europeias do interior — como a famosa Oktoberfest em Blumenau. Essa rica herança é celebrada diariamente na dança, na música e em uma gastronomia diversificada.
            </p>
          </section>

          {/* Rodapé / Link de retorno */}
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