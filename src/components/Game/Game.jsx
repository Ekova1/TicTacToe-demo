import { GameInfo } from './GameInfo'
import { GameCell } from './GameCell'
import { useGameState } from './useGameState'

export function Game() {
	const {
		cells,
		currentStep,
		winnerSequence,
		winnerSymbol,
		isGameDraw,
		handleCellClick,
		handleClickReset
	} = useGameState()

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
			<GameInfo winnerSymbol={winnerSymbol} isGameDraw={isGameDraw} currentStep={currentStep} />

			<div className="grid grid-cols-[repeat(3,_100px)] grid-rows-[repeat(3,_100px)] gap-2 bg-white p-3 rounded-md shadow-md">
				{cells.map((symbol, index) => {
					return <GameCell
						key={index}
						isWinner={winnerSequence?.includes(index)}
						symbol={symbol}
						onClick={() => handleCellClick(index)}
					/>
				})}
			</div>

			<div className="text-center text-indigo-400 m-5 text-xl cursor-pointer" onClick={handleClickReset}>
				<span className='hover:text-red-400'>Сбросить</span>
			</div>

		</div>
	)
}