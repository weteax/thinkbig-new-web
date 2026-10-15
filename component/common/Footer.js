import Logo from '../icon/Logo';
import Socials from '../icon/Socials';

export default function Footer({ className }) {
    return (
        <footer className={`max-w-7xl text-secondary py-12  md:px-5  flex flex-col justify-between ${className}`}>
            {/* Seksioni kryesor */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
                
                {/* Kolona 1 & 2: Logoja dhe Përshkrimi (zë 2 kolona në ekranet e mëdha) */}
                <div className="lg:col-span-2 flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-2">
                        {/* Përdor komponentin tuaj Logo */}
                        <Logo />
                    </div>
                    <p className="text-secondary/70 text-sm md:text-base leading-relaxed max-w-sm">
                        Platforma mediatike për njerëzit, idetë dhe historitë që formësojnë të ardhmen e Shqipërisë.
                    </p>
                </div>

                {/* Kolona 3: PËRMBAJTJA */}
                <div className="flex flex-col space-y-3">
                    <h3 className="text-secondary font-bold tracking-wider text-sm mb-2">PËRMBAJTJA</h3>
                    <a href="#episodet" className="text-secondary/70 hover:text-white transition-colors text-sm">Episodet</a>
                    <a href="#temat" className="text-secondary/70 hover:text-white transition-colors text-sm">Temat</a>
                    <a href="#eventet" className="text-secondary/70 hover:text-white transition-colors text-sm">Eventet</a>
                    <a href="#rreth-nesh" className="text-secondary/70 hover:text-white transition-colors text-sm">Rreth nesh</a>
                    <a href="#newsletter" className="text-secondary/70 hover:text-white transition-colors text-sm">Newletter</a>
                </div>

                {/* Kolona 4: BURIME */}
                <div className="flex flex-col space-y-3">
                    <h3 className="text-white font-bold tracking-wider text-sm mb-2">BURIME</h3>
                    <a href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a>
                    <a href="#video" className="text-gray-300 hover:text-white transition-colors text-sm">Video</a>
                    <a href="#partneret" className="text-gray-300 hover:text-white transition-colors text-sm">Partnerët</a>
                    <a href="#kontakto" className="text-gray-300 hover:text-white transition-colors text-sm">Kontakto</a>
                </div>

                {/* Kolona 5: LEGAL & Socials */}
                <div className="flex flex-col space-y-4">
                    <h3 className="text-white font-bold tracking-wider text-sm mb-2">LEGAL</h3>
                    <a href="#politika" className="text-gray-300 hover:text-white transition-colors text-sm">Politika e privatësisë</a>
                    <a href="#kushtet" className="text-gray-300 hover:text-white transition-colors text-sm">Kushtet e përdorimit</a>
                    
                    {/* Rrjetet sociale */}
                    <div className="pt-2">
                        <Socials />
                    </div>
                </div>

            </div>

            {/* Vija ndarëse e poshtme */}
            <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
                <p>© 2026 ThinkBIG. Të gjitha të drejtat e rezervuara.</p>
                <p className="mt-2 sm:mt-0">Ndërtuar në Shqipëri, për ide më të mëdha.</p>
            </div>
        </footer>
    );
}