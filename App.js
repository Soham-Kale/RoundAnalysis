import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GameAnalysisScreen } from './src/screens/GameAnalysisScreen';
import { MOCK_ANALYSIS_DATA } from './src/data/mockAnalysis';

function App() {
  return (
    <SafeAreaProvider>
      <GameAnalysisScreen data={MOCK_ANALYSIS_DATA.game_analysis} />
    </SafeAreaProvider>
  );
}

export default App;
