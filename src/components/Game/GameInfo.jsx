import { GameSymbol } from './GameSymbol'

export function GameInfo({ winnerSymbol, isGameDraw, currentStep }) {
	if (winnerSymbol) {
		return (
			<div className="text-xl mb-2">
				Победитель: <span className="text-4xl pl-1">{<GameSymbol symbol={winnerSymbol} />}</span>
			</div>
		)
	}

	else if (isGameDraw) {
		return (
			<div className="text-xl mb-2">
				Ничья
			</div>
		)
	}

	else {
		return (
			<div className="text-xl mb-2">
				Ход: <span className="text-4xl pl-1">{<GameSymbol symbol={currentStep} />}</span>
			</div>
		)
	}
}