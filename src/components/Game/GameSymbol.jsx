import { SYMBOL_X, SYMBOL_O } from './constants'

export function GameSymbol({ symbol }) {
	const getSymbolClassName = (symbol) => {
		return symbol === SYMBOL_X ? 'text-red-400' : 'text-indigo-400'
	}
	return <span className={`font-bold ${getSymbolClassName(symbol)}`}>{symbol}</span>
}