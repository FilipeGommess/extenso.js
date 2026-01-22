import Currencies from '../ts/enum/currencies.enum'
import Currency from '../ts/interface/currency.interface'

const currencies: Record<Currencies, Currency> = {
    // --- Originais e CPLP ---
    [Currencies.AOA]: {
        singular: 'kwanza',
        plural: 'kwanzas',
        subunit: { singular: 'cêntimo', plural: 'cêntimos' },
    },
    [Currencies.CVE]: {
        singular: 'escudo',
        plural: 'escudos',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.BRL]: {
        singular: 'real',
        plural: 'reais',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.XOF]: {
        singular: 'franco',
        plural: 'francos', // Franco CFA
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.MZN]: {
        singular: 'metical',
        plural: 'meticais',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.EUR]: {
        singular: 'euro',
        plural: 'euros',
        subunit: { singular: 'cêntimo', plural: 'cêntimos' },
    },
    [Currencies.STN]: {
        singular: 'dobra',
        plural: 'dobras',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.USD]: {
        singular: 'dólar',
        plural: 'dólares',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.MOP]: {
        singular: 'pataca',
        plural: 'patacas',
        subunit: { singular: 'avo', plural: 'avos' },
    },

    // --- Américas ---
    [Currencies.ARS]: {
        singular: 'peso argentino',
        plural: 'pesos argentinos',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.BOB]: {
        singular: 'boliviano',
        plural: 'bolivianos',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.CLP]: {
        singular: 'peso chileno',
        plural: 'pesos chilenos',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.COP]: {
        singular: 'peso colombiano',
        plural: 'pesos colombianos',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.CAD]: {
        singular: 'dólar canadense',
        plural: 'dólares canadenses',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.MXN]: {
        singular: 'peso mexicano',
        plural: 'pesos mexicanos',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.PYG]: {
        singular: 'guarani',
        plural: 'guaranis',
        subunit: { singular: 'cêntimo', plural: 'cêntimos' },
    },
    [Currencies.UYU]: {
        singular: 'peso uruguaio',
        plural: 'pesos uruguaios',
        subunit: { singular: 'centésimo', plural: 'centésimos' },
    },
    [Currencies.VES]: {
        singular: 'bolívar',
        plural: 'bolívares',
        subunit: { singular: 'cêntimo', plural: 'cêntimos' },
    },
    [Currencies.PEN]: {
        singular: 'sol',
        plural: 'soles',
        subunit: { singular: 'cêntimo', plural: 'cêntimos' },
    },

    // --- Europa (Extra Zona Euro) ---
    [Currencies.GBP]: {
        singular: 'libra esterlina',
        plural: 'libras esterlinas',
        subunit: { singular: 'penny', plural: 'pence' }, 
    },
    [Currencies.CHF]: {
        singular: 'franco suíço',
        plural: 'francos suíços',
        subunit: { singular: 'centavo', plural: 'centavos' }, 
    },
    [Currencies.SEK]: {
        singular: 'coroa sueca',
        plural: 'coroas suecas',
        subunit: { singular: 'öre', plural: 'öre' },
    },
    [Currencies.NOK]: {
        singular: 'coroa norueguesa',
        plural: 'coroas norueguesas',
        subunit: { singular: 'öre', plural: 'öre' },
    },
    [Currencies.DKK]: {
        singular: 'coroa dinamarquesa',
        plural: 'coroas dinamarquesas',
        subunit: { singular: 'öre', plural: 'öre' },
    },
    [Currencies.RUB]: {
        singular: 'rublo',
        plural: 'rublos',
        subunit: { singular: 'copeque', plural: 'copeques' },
    },
    [Currencies.TRY]: {
        singular: 'lira turca',
        plural: 'liras turcas',
        subunit: { singular: 'kuruş', plural: 'kuruş' },
    },

    // --- Ásia e Oceania ---
    [Currencies.JPY]: {
        singular: 'iene',
        plural: 'ienes',
        subunit: { singular: 'sen', plural: 'sen' },
    },
    [Currencies.CNY]: {
        singular: 'yuan',
        plural: 'yuans',
        subunit: { singular: 'fen', plural: 'fen' }, // O Yuan divide-se em Jiao e depois Fen. Fen é o centavo.
    },
    [Currencies.AUD]: {
        singular: 'dólar australiano',
        plural: 'dólares australianos',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.NZD]: {
        singular: 'dólar neozelandês',
        plural: 'dólares neozelandeses',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.INR]: {
        singular: 'rúpia indiana',
        plural: 'rúpias indianas',
        subunit: { singular: 'paisa', plural: 'paisas' },
    },
    [Currencies.KRW]: {
        singular: 'won',
        plural: 'wons',
        subunit: { singular: 'jeon', plural: 'jeon' },
    },
    [Currencies.IDR]: {
        singular: 'rúpia indonésia',
        plural: 'rúpias indonésias',
        subunit: { singular: 'sen', plural: 'sen' },
    },
    [Currencies.HKD]: {
        singular: 'dólar de hong kong',
        plural: 'dólares de hong kong',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },

    // --- África e Oriente Médio ---
    [Currencies.ZAR]: {
        singular: 'rand',
        plural: 'rands',
        subunit: { singular: 'centavo', plural: 'centavos' },
    },
    [Currencies.EGP]: {
        singular: 'libra egípcia',
        plural: 'libras egípcias',
        subunit: { singular: 'piastra', plural: 'piastras' },
    },
    [Currencies.ILS]: {
        singular: 'novo shekel',
        plural: 'novos shekels',
        subunit: { singular: 'agora', plural: 'agorot' },
    },
    [Currencies.SAR]: {
        singular: 'riyal',
        plural: 'riyals', // ou riais
        subunit: { singular: 'halala', plural: 'halalas' },
    },
    [Currencies.AED]: {
        singular: 'dirham',
        plural: 'dirhams',
        subunit: { singular: 'fils', plural: 'fils' },
    },
}

export default currencies