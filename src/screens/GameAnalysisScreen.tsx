import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  StatusBar,
} from 'react-native';
import { GameAnalysis, MoveBreakdown } from '../types/analysis';

interface Props {
  data: GameAnalysis;
}

export const GameAnalysisScreen: React.FC<Props> = ({ data }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]} contentContainerStyle={styles.contentContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* Header Section */}
      <View style={styles.section}>
        <Text style={[styles.openingName, { color: theme.textPrimary }]}>{data.openingIdentification.name}</Text>
        <View style={styles.badgeContainer}>
          <View style={[styles.badge, { backgroundColor: theme.accent }]}>
            <Text style={styles.badgeText}>{data.openingIdentification.ecoCode}</Text>
          </View>
        </View>
      </View>

      {/* Engine Evaluation */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
        <View style={styles.evalHeader}>
          <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>Engine Evaluation</Text>
          <Text style={[styles.evalScore, { color: getEvalColor(data.theoreticalEngineEvaluation.evaluation) }]}>
            {data.theoreticalEngineEvaluation.evaluation}
          </Text>
        </View>
        <Text style={[styles.cardText, { color: theme.textSecondary }]}>
          {data.theoreticalEngineEvaluation.description}
        </Text>
      </View>

      {/* Opening Background */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
        <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>History & Background</Text>
        <Text style={[styles.cardText, { color: theme.textSecondary }]}>
          {data.openingIdentification.background}
        </Text>
      </View>

      {/* Move by Move Breakdown */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Move by Move</Text>
        {data.moveByMoveBreakdown.map((move, index) => (
          <MoveItem key={index} move={move} theme={theme} />
        ))}
      </View>

      {/* Themes Table */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Strategic Themes</Text>
        <View style={[styles.table, { borderColor: theme.border }]}>
          <View style={[styles.tableRow, styles.tableHeaderRow, { backgroundColor: theme.tableHeader }]}>
            <Text style={[styles.tableHeader, { color: theme.textPrimary, flex: 1 }]}>Theme</Text>
            <Text style={[styles.tableHeader, { color: theme.textPrimary, flex: 2 }]}>White</Text>
            <Text style={[styles.tableHeader, { color: theme.textPrimary, flex: 2 }]}>Black</Text>
          </View>
          {data.positionalAndTacticalThemesTable.rows.map((row, index) => (
            <View key={index} style={[styles.tableRow, { borderBottomColor: theme.border, borderBottomWidth: index === data.positionalAndTacticalThemesTable.rows.length - 1 ? 0 : 1 }]}>
              <Text style={[styles.tableCell, { color: theme.textPrimary, flex: 1, fontWeight: 'bold' }]}>{row.theme}</Text>
              <Text style={[styles.tableCell, { color: theme.textSecondary, flex: 2 }]}>{row.white}</Text>
              <Text style={[styles.tableCell, { color: theme.textSecondary, flex: 2 }]}>{row.black}</Text>
            </View>
          ))}
        </View>
      </View>
      
       {/* Categorized Summary Table */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.textPrimary }]}>Analysis Summary</Text>
        <View style={[styles.table, { borderColor: theme.border }]}>
          <View style={[styles.tableRow, styles.tableHeaderRow, { backgroundColor: theme.tableHeader }]}>
            <Text style={[styles.tableHeader, { color: theme.textPrimary, flex: 1 }]}>Category</Text>
            <Text style={[styles.tableHeader, { color: theme.textPrimary, flex: 1 }]}>Assessment</Text>
          </View>
          {data.categorizedSummaryTable.rows.map((row, index) => (
            <View key={index} style={[styles.tableRow, { borderBottomColor: theme.border, borderBottomWidth: index === data.categorizedSummaryTable.rows.length - 1 ? 0 : 1 }]}>
              <Text style={[styles.tableCell, { color: theme.textPrimary, flex: 1, fontWeight: 'bold' }]}>{row.category}</Text>
              <Text style={[styles.tableCell, { color: theme.textSecondary, flex: 1 }]}>{row.assessment}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Expert Summary */}
      <View style={[styles.card, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow, marginBottom: 40 }]}>
        <Text style={[styles.cardTitle, { color: theme.textPrimary }]}>Expert Conclusion</Text>
        <Text style={[styles.summaryHeader, { color: theme.accent }]}>The Breakdown</Text>
        <Text style={[styles.cardText, { color: theme.textSecondary, marginBottom: 12 }]}>{data.finalExpertSummary.summary}</Text>
        
        <Text style={[styles.summaryHeader, { color: theme.accent }]}>Verdict</Text>
        <Text style={[styles.cardText, { color: theme.textSecondary, marginBottom: 12 }]}>{data.finalExpertSummary.whosBetter}</Text>
        
        <Text style={[styles.summaryHeader, { color: theme.accent }]}>Next Steps</Text>
        <Text style={[styles.cardText, { color: theme.textSecondary }]}>{data.finalExpertSummary.nextSteps}</Text>
      </View>

    </ScrollView>
  );
};

const MoveItem = ({ move, theme }: { move: MoveBreakdown, theme: any }) => (
  <View style={[styles.moveCard, { backgroundColor: theme.cardBackground, shadowColor: theme.shadow }]}>
    <View style={styles.moveNumberContainer}>
        <Text style={styles.moveNumber}>{move.moveNumber}</Text>
    </View>
    
    <View style={styles.moveRow}>
      <View style={styles.moveSide}>
        <View style={styles.moveBadgeWhite}>
          <Text style={styles.moveBadgeTextDark}>{move.whiteMove}</Text>
        </View>
        <Text style={[styles.moveExplanation, { color: theme.textSecondary }]}>{move.whiteExplanation}</Text>
      </View>
    </View>

    <View style={[styles.divider, { backgroundColor: theme.border }]} />

    <View style={styles.moveRow}>
      <View style={styles.moveSide}>
        <View style={styles.moveBadgeBlack}>
          <Text style={styles.moveBadgeTextLight}>{move.blackMove}</Text>
        </View>
        <Text style={[styles.moveExplanation, { color: theme.textSecondary }]}>{move.blackExplanation}</Text>
      </View>
    </View>
  </View>
);

const getEvalColor = (score: string) => {
  if (score.includes('+')) return '#4CAF50'; // White advantage
  if (score.includes('-')) return '#F44336'; // Black advantage
  return '#9E9E9E'; // Drawish
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
    marginTop: 40,
  },
  openingName: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  evalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  evalScore: {
    fontSize: 24,
    fontWeight: '900',
  },
  moveCard: {
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
    overflow: 'hidden',
  },
  moveNumberContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#E0E0E0',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderBottomRightRadius: 8,
      zIndex: 1,
  },
  moveNumber: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#424242',
  },
  moveRow: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  moveSide: {
    flex: 1,
  },
  moveBadgeWhite: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  moveBadgeBlack: {
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  moveBadgeTextDark: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  moveBadgeTextLight: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  moveExplanation: {
    fontSize: 15,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    marginVertical: 4,
    opacity: 0.5,
  },
  table: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
  },
  tableHeaderRow: {
    borderBottomWidth: 0,
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  tableCell: {
    fontSize: 14,
    lineHeight: 20,
  },
  summaryHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
      marginBottom: 4,
  }
});

const lightTheme = {
  background: '#F7F9FC', // Very light blue/grey
  cardBackground: '#FFFFFF',
  textPrimary: '#1A202C',
  textSecondary: '#4A5568',
  accent: '#3182CE', // Blue
  shadow: '#000',
  border: '#E2E8F0',
  tableHeader: '#EDF2F7',
};

const darkTheme = {
  background: '#121212', // Dark background
  cardBackground: '#1E1E1E', // Darker card
  textPrimary: '#FFFFFF',
  textSecondary: '#A0AEC0',
  accent: '#63B3ED', // Light blue
  shadow: '#000',
  border: '#2D3748',
  tableHeader: '#2D3748',
};
