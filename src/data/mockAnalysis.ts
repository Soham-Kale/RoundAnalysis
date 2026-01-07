import { AnalysisResponse } from '../types/analysis';

export const MOCK_ANALYSIS_DATA: AnalysisResponse = {
    game_analysis: {
        openingIdentification: {
            name: "Italian Game, Two Knights Defense, Fried Liver Attack",
            ecoCode: "C57",
            background: "The Fried Liver Attack is one of the oldest and most aggressive openings in chess, dating back to at least the 17th century. It is characterized by White's early knight sacrifice on f7, aiming to expose the Black king and launch a devastating attack at the cost of a minor piece. The name's origin is debated, but it likely relates to the Italian phrase 'fritto nel suo fegato', meaning 'dead as a doornail', which is what happens to Black if the attack succeeds."
        },
        moveByMoveBreakdown: [
            {
                moveNumber: 1,
                whiteMove: "e4",
                whiteExplanation: "White begins with the King's Pawn opening, the most popular and direct way to fight for the center and open lines for the queen and a bishop.",
                blackMove: "e5",
                blackExplanation: "Black symmetrically replies, also staking a claim in the center and leading the game into classical, open territory."
            },
            {
                moveNumber: 2,
                whiteMove: "Nf3",
                whiteExplanation: "A standard developing move. The knight attacks Black's e5 pawn, develops a piece, and prepares for castling.",
                blackMove: "Nc6",
                blackExplanation: "The most common and solid response. The knight develops and defends the e5 pawn."
            },
            {
                moveNumber: 3,
                whiteMove: "Bc4",
                whiteExplanation: "The Italian Game. White develops the bishop to its most active square, where it puts pressure on Black's weak f7 pawn and controls key central diagonals.",
                blackMove: "Nf6",
                blackExplanation: "This initiates the Two Knights Defense. Instead of a quiet bishop development, Black develops the knight, counter-attacking White's e4 pawn and challenging White's central control."
            },
            {
                moveNumber: 4,
                whiteMove: "Ng5",
                whiteExplanation: "A highly aggressive and provocative move. White ignores the threat to e4 and instead launches an immediate attack on the vulnerable f7 square. This move defines the opening variation and forces a sharp, tactical battle.",
                blackMove: "d5",
                blackExplanation: "The main and best reply. Black correctly understands that the best defense is a central counter-attack. This move blocks the c4 bishop's access to f7 and attacks the e4 pawn, creating immediate complications."
            },
            {
                moveNumber: 5,
                "whiteMove": "exd5",
                "whiteExplanation": "White captures the pawn, opening the e-file and forcing Black to react. The d5 pawn is now a thorn in Black's side.",
                "blackMove": "Nxd5",
                "blackExplanation": "A natural-looking recapture, but this is a well-known inaccuracy. It allows White to execute the famous knight sacrifice. The theoretically superior move is 5...Na5 (the Polerio Defense), which forces the white bishop to move and gives Black time to consolidate."
            },
            {
                moveNumber: 6,
                whiteMove: "Nxf7",
                whiteExplanation: "The star move of the Fried Liver Attack. This is a brilliant and thematic knight sacrifice. White shatters Black's kingside pawn structure and, more importantly, forces the Black king out into the open, where it will be a permanent target.",
                blackMove: "Kxf7",
                blackExplanation: "Forced. Declining the sacrifice would lead to an even worse position. By capturing, Black wins a piece but his king is now dragged to f7, embarking on a perilous journey across the board."
            }
        ],
        positionalAndTacticalThemesTable: {
            headers: [
                "Theme",
                "White",
                "Black"
            ],
            rows: [
                {
                    theme: "Development",
                    white: "Technically down a piece, but key attackers (Queen, Bishop) are ready to join the fray. Development is focused and purposeful.",
                    black: "Severely hampered. The king's move prevents castling and the pieces are uncoordinated and stuck on their starting squares."
                },
                {
                    theme: "King Safety",
                    white: "Perfectly safe. The king can castle queenside or simply remain in the center, far from the action.",
                    black: "Catastrophic. The king is on f7, exposed to checks from all angles. It is the central focus of the entire position."
                },
                {
                    theme: "Center Control",
                    white: "Excellent. The d5 pawn restricts Black, and the c4 bishop exerts powerful influence.",
                    black: "Weak. Black's central structure is compromised, and the priority is king survival, not central control."
                },
                {
                    theme: "Initiative",
                    white: "Possesses a massive and enduring initiative. White dictates the flow of the game with a constant stream of threats.",
                    black: "Completely reactive. Black is forced to defend passively against White's attack and has no counterplay."
                },
                {
                    theme: "Typical Plans / Motifs",
                    white: "Attack the king with Qf3+, Nc3, d4. Use open files and diagonals to create mating threats or win back material with interest.",
                    black: "Survive. Find a safe square for the king (e.g., Ke6-Kd7), trade pieces to relieve pressure, and try to consolidate the extra piece for a long-term advantage."
                }
            ]
        },
        theoreticalEngineEvaluation: {
            evaluation: "+1.8",
            description: "The engine evaluation shows a decisive advantage for White, close to winning. While White is down a knight for a pawn, the compensation is overwhelming. The attack on the exposed Black king is so powerful that with correct play, White should convert the advantage. For Black, the position is practically impossible to defend over the board against a prepared opponent. The computer shows that survival is possible, but it requires a series of only-moves."
        },
        categorizedSummaryTable: {
            headers: [
                "Category",
                "Assessment"
            ],
            rows: [
                {
                    category: "Opening theory depth",
                    assessment: "High. This line has been analyzed for centuries, with critical moves known deep into the middlegame."
                },
                {
                    category: "Complexity level",
                    assessment: "Very High. The position is exceptionally sharp and requires precise calculation to navigate the tactical jungle."
                },
                {
                    category: "Tactical vs. strategic balance",
                    assessment: "Overwhelmingly Tactical. The game revolves around direct attacks, threats, and defensive maneuvers."
                },
                {
                    category: "Practical value (in OTB play)",
                    assessment: "Excellent for White, especially below the master level. It poses immediate, difficult problems for an unprepared opponent."
                },
                {
                    category: "Blunder potential",
                    assessment: "Extremely High for Black. A single misstep can lead to a forced checkmate or catastrophic loss of material."
                },
                {
                    category: "Expected outcome trend",
                    assessment: "Decisive advantage for White. Often leads to a quick victory for White through a direct king hunt."
                }
            ]
        },
        finalExpertSummary: {
            summary: "We have arrived at the critical position of the Fried Liver Attack. By sacrificing a knight on f7, White has ripped open the Black kingside and exposed the enemy king. This is a classic example of sacrificing material for a decisive, long-lasting initiative. Black's decision to play 5...Nxd5 instead of the safer 5...Na5 has led to this dire situation. While Black is technically ahead a piece for a pawn, this material advantage is irrelevant in the face of White's crushing attack.",
            whosBetter: "White is decisively better, bordering on winning. The compensation for the sacrificed knight is more than adequate: Black's king is a refugee, Black's pieces are undeveloped and uncoordinated, and White's forces are perfectly poised to deliver a knockout blow. The position is a testament to the principle that king safety and initiative can often outweigh a material deficit.",
            nextSteps: "For White, the plan is clear and direct: continue the attack. The next move is almost always **7. Qf3+**. This single move accomplishes three things: it brings the powerful queen into the attack, it forces the Black king to an even worse square (usually Ke6), and it attacks the d5 knight. Following this, White will continue with moves like Nc3, d4, and O-O-O, piling pressure on Black's exposed king. For Black, the goal is simple but incredibly difficult: survive. The king must try to find shelter, perhaps via Ke6-Kd7 or by running back to g8. The primary task is to parry White's immediate threats, trade pieces where possible to diffuse the attack, and pray that if the storm is weathered, the extra piece will eventually decide the game in the endgame."
        }
    }
};
