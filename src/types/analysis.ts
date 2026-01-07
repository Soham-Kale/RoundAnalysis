export interface OpeningIdentification {
  name: string;
  ecoCode: string;
  background: string;
}

export interface MoveBreakdown {
  moveNumber: number;
  whiteMove: string;
  whiteExplanation: string;
  blackMove: string;
  blackExplanation: string;
}

export interface ThemeRow {
  theme: string;
  white: string;
  black: string;
}

export interface ThemesTable {
  headers: string[];
  rows: ThemeRow[];
}

export interface EngineEvaluation {
  evaluation: string;
  description: string;
}

export interface CategoryAssessment {
  category: string;
  assessment: string;
}

export interface SummaryTable {
  headers: string[];
  rows: CategoryAssessment[];
}

export interface FinalSummary {
  summary: string;
  whosBetter: string;
  nextSteps: string;
}

export interface GameAnalysis {
  openingIdentification: OpeningIdentification;
  moveByMoveBreakdown: MoveBreakdown[];
  positionalAndTacticalThemesTable: ThemesTable;
  theoreticalEngineEvaluation: EngineEvaluation;
  categorizedSummaryTable: SummaryTable;
  finalExpertSummary: FinalSummary;
}

export interface AnalysisResponse {
  game_analysis: GameAnalysis;
}
