import { GameSymbol } from './GameSymbol'
import { SYMBOL_X, SYMBOL_O } from './constants'
import { clsx } from 'clsx'

function getCellWinClasses(symbol) {
	return symbol == SYMBOL_X ? 'bg-red-100 hover:bg-red-100' : 'bg-indigo-100 hover:bg-indigo-100'
}

export function GameCell({ isWinner, symbol, onClick }) {
	return (
		<button
			className={clsx(
				`flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-sm text-6xl font-bold cursor-pointer transition-all ease-in-out`,
				isWinner && `${getCellWinClasses(symbol)}`
			)}
			onClick={onClick}
		>
			<GameSymbol symbol={symbol} />
		</button>
	)
}