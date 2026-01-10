import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { MOCK_ANALYSIS_DATA } from '../data/mockAnalysis';

const { width } = Dimensions.get('window');

const SectionCard = ({ title, children, style }) => (
    <View style={[styles.card, style]}>
        <Text style={styles.cardTitle}>{title}</Text>
        {children}
    </View>
);

const Tag = ({ text, color = '#4dabf7' }) => (
    <View style={[styles.tag, { backgroundColor: `${color}20`, borderColor: color }]}>
        <Text style={[styles.tagText, { color }]}>{text}</Text>
    </View>
);

const DetailRow = ({ label, value, valueStyle }) => (
    <View style={styles.detailRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, valueStyle]}>{value}</Text>
    </View>
);

export const EventAnalysisScreen = () => {
    const data = MOCK_ANALYSIS_DATA.event_analysis.cumulative_analysis;

    if (!data) {
        return (
        <View style={styles.container}>
            <Text style={styles.errorText}>No analysis data available</Text>
        </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.headerTitle}>Tournament Analysis</Text>
                
                {/* Opening Repertoire */}
                <SectionCard title="Opening Repertoire">
                    <Text style={styles.summaryText}>{data.opening_repertoire.summary}</Text>
                    <View style={styles.tagContainer}>
                        {data.opening_repertoire.openings_played.map((opening, index) => (
                        <Tag key={index} text={opening} color="#ffd43b" />
                        ))}
                    </View>
                    <DetailRow 
                        label="Most Successful" 
                        value={data.opening_repertoire.most_successful_opening}
                        valueStyle={{ color: '#69db7c' }}
                    />
                    <DetailRow 
                        label="Style" 
                        value={data.opening_repertoire.style_tag} 
                    />
                </SectionCard>

                {/* Performance Stability */}
                <SectionCard title="Performance Stability">
                    <View style={styles.stabilityGrid}>
                        <View style={styles.statBox}>
                        <Text style={styles.statLabel}>Energy</Text>
                        <Text style={[styles.statValue, { color: '#ff6b6b' }]}>
                            {data.performance_stability.energy_level}
                        </Text>
                        </View>
                        <View style={styles.statBox}>
                        <Text style={styles.statLabel}>Fatigue</Text>
                        <Text style={styles.statValue}>
                            {data.performance_stability.fatigue_indicator}
                        </Text>
                        </View>
                    </View>
                    <Text style={[styles.bodyText, { marginTop: 12 }]}>
                        {data.performance_stability.analysis}
                    </Text>
                </SectionCard>

                {/* Tactical Themes */}
                <SectionCard title="Recurring Tactical Themes">
                    <View style={styles.themeList}>
                        {data.recurring_tactical_themes.identified_themes.map((theme, index) => (
                        <View key={index} style={styles.themeItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.themeText}>{theme}</Text>
                        </View>
                        ))}
                    </View>
                    <View style={styles.noteBox}>
                        <Text style={styles.noteText}>
                        Note: {data.recurring_tactical_themes.pattern_note}
                        </Text>
                    </View>
                </SectionCard>

                {/* Psychological Profile */}
                <SectionCard title="Psychological Profile">
                    <DetailRow 
                        label="Current State" 
                        value={data.psychological_profile.current_state}
                        valueStyle={{ color: '#da77f2', fontWeight: 'bold' }}
                    />
                    <Text style={[styles.bodyText, { marginTop: 12, marginBottom: 8 }]}>
                        {data.psychological_profile.profile_details}
                    </Text>
                    <DetailRow 
                        label="Reaction to Adversity" 
                        value={data.psychological_profile.reaction_to_adversity}
                        valueStyle={{ fontStyle: 'italic', color: '#adb5bd' }}
                    />
                </SectionCard>

                {/* MVP Move */}
                <SectionCard title="Tournament MVP Move" style={styles.mvpCard}>
                    <View style={styles.mvpHeader}>
                        <Text style={styles.moveNotation}>{data.tournament_mvp_move.move_notation}</Text>
                        <View style={styles.roundBadge}>
                        <Text style={styles.roundText}>Round {data.tournament_mvp_move.game_round}</Text>
                        </View>
                    </View>
                    <Text style={styles.mvpDescription}>
                        {data.tournament_mvp_move.description}
                    </Text>
                </SectionCard>

                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 16,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e0e0e0',
    marginBottom: 16,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
  // Typography
  summaryText: {
    fontSize: 15,
    color: '#ced4da',
    lineHeight: 22,
    marginBottom: 16,
  },
  bodyText: {
    fontSize: 14,
    color: '#adb5bd',
    lineHeight: 20,
  },
  label: {
    fontSize: 14,
    color: '#868e96',
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: '#f8f9fa',
    flex: 2,
    textAlign: 'right',
  },
  // Components
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  // Stability Grid
  stabilityGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#252525',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#868e96',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e9ecef',
  },
  // Themes
  themeList: {
    marginBottom: 16,
  },
  themeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletPoint: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4dabf7',
    marginRight: 12,
  },
  themeText: {
    fontSize: 14,
    color: '#e9ecef',
  },
  noteBox: {
    backgroundColor: 'rgba(77, 171, 247, 0.1)',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#4dabf7',
  },
  noteText: {
    fontSize: 13,
    color: '#a5d8ff',
    fontStyle: 'italic',
  },
  // MVP Card
  mvpCard: {
    borderColor: '#ffd43b',
    borderWidth: 1,
    backgroundColor: 'rgba(255, 212, 59, 0.05)',
  },
  mvpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  moveNotation: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffd43b',
  },
  roundBadge: {
    backgroundColor: '#ffd43b',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roundText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 12,
  },
  mvpDescription: {
    fontSize: 15,
    color: '#e9ecef',
    lineHeight: 22,
  },
});
