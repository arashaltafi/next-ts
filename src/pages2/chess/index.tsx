import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';

// npm i react-chessboard
const ChessBoard: React.FC = () => {
    const [boardOrientation, setBoardOrientation] = useState<"white" | "black">("white");
    const [isDraggable, setIsDraggable] = useState(true);
    const [isDropSquareStyle, setIsDropSquareStyle] = useState(true);
    const [isBoardStyle, setIsBoardStyle] = useState(true);
    const [position, setPosition] = useState("start");

    const onPieceDrop = (sourceSquare: string, targetSquare: string, piece: string) => {
        console.log(`Piece ${piece} dropped from ${sourceSquare} to ${targetSquare}`);
        return true; // return false to disallow move
    };

    const customBoardStyle = {
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
    };

    const customDropSquareStyle = { boxShadow: 'inset 0 0 1px 4px red' };

    const customSquareStyles = {
        e4: { backgroundColor: 'lightblue' },
        d4: { backgroundColor: 'lightblue' },
        e5: { backgroundColor: 'lightblue' },
        d5: { backgroundColor: 'lightblue' },
    };

    const customPieces = {
        wK: ({ squareWidth }: { squareWidth: number }) => (
            <div style={{ width: squareWidth, height: squareWidth, backgroundImage: 'url(/path/to/custom/white-king.png)' }} />
        ),
        bK: ({ squareWidth }: { squareWidth: number }) => (
            <div style={{ width: squareWidth, height: squareWidth, backgroundImage: 'url(/path/to/custom/black-king.png)' }} />
        ),
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Chessboard
                id="BasicBoard"
                boardOrientation={boardOrientation}
                // onPieceDrop={onPieceDrop}
                position={position}
                // customPieces={customPieces}
            />
            <div className='mt-5 flex flex-row flex-wrap gap-8'>
                <button className='px-8 py-4 bg-red-500 rounded-xl' onClick={() => setBoardOrientation(boardOrientation === "white" ? "black" : "white")}>
                    Toggle Orientation
                </button>
                <button className='px-8 py-4 bg-red-500 rounded-xl' onClick={() => setIsDraggable(!isDraggable)}>
                    Toggle Draggable
                </button>
                <button className='px-8 py-4 bg-red-500 rounded-xl' onClick={() => setIsDropSquareStyle(!isDropSquareStyle)}>
                    Toggle Drop Square Style
                </button>
                <button className='px-8 py-4 bg-red-500 rounded-xl' onClick={() => setIsBoardStyle(!isBoardStyle)}>
                    Toggle Board Style
                </button>
                <button className='px-8 py-4 bg-red-500 rounded-xl' onClick={() => setPosition(position === "start" ? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" : "start")}>
                    Toggle Position
                </button>
            </div>
        </div>
    );
};

export default ChessBoard;