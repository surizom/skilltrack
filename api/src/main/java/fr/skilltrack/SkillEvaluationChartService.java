package fr.skilltrack;

import fr.skilltrack.dto.SkillEvaluationChartData;
import fr.skilltrack.entities.Skill;
import fr.skilltrack.entities.SkillEvaluation;
import fr.skilltrack.time.TimeProvider;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class SkillEvaluationChartService {

  private TimeProvider timeProvider;

  public SkillEvaluationChartService(SkillService skillService, TimeProvider timeProvider) {
    this.timeProvider = timeProvider;
  }

  public SkillEvaluationChartData evaluationChartData(Skill skill) {

    SortedMap<String, Integer> evaluationDataWithNoNullValues =
        fillNullValues(evaluationData(skill.getEvaluations()));

    SkillEvaluationChartData skillEvaluationChartData = new SkillEvaluationChartData();
    skillEvaluationChartData.setSkillLevels(
        new ArrayList<>(evaluationDataWithNoNullValues.values()));
    skillEvaluationChartData.setDateLabels(
        new ArrayList<>(evaluationDataWithNoNullValues.keySet()));

    return skillEvaluationChartData;
  }

  private SortedSet<EvaluationDataPoint> evaluationData(
      SortedMap<Integer, SkillEvaluation> evaluations) {

    Comparator<AbstractMap.SimpleEntry<String, Integer>> comparator =
        Comparator.comparing(AbstractMap.SimpleEntry::getValue);

    return timeProvider
        .beginning()
        .datesUntil(timeProvider.today())
        .map(date -> evaluationDataEntry(date, evaluations))
        .sorted()
        .collect(Collectors.toCollection(TreeSet::new));
  }

  private EvaluationDataPoint evaluationDataEntry(
      LocalDate date, SortedMap<Integer, SkillEvaluation> evaluations) {
    return new EvaluationDataPoint(formatddMM(date), dateEvaluationValue(date, evaluations));
  }

  private String formatddMM(LocalDate date) {
    return date.format(DateTimeFormatter.BASIC_ISO_DATE);
  }

  private Integer dateEvaluationValue(
      LocalDate date, SortedMap<Integer, SkillEvaluation> evaluations) {
    return evaluations
        .getOrDefault(this.timeProvider.numberOfDaysSinceBeginning(date), new SkillEvaluation())
        .getLevel();
  }

  private SortedMap<String, Integer> fillNullValues(SortedSet<EvaluationDataPoint> evaluationData) {

    int currentValue = 0;

    SortedMap<String, Integer> filledEvaluationData = new TreeMap<>();

    for (EvaluationDataPoint evaluationDataPoint : evaluationData) {
      if (evaluationDataPoint.getValue() == null) {
        filledEvaluationData.put(evaluationDataPoint.getDate(), currentValue);
      } else {
        currentValue = evaluationDataPoint.getValue();
        filledEvaluationData.put(evaluationDataPoint.getDate(), currentValue);
      }
    }

    return filledEvaluationData;
  }

  @Data
  @EqualsAndHashCode
  private static class EvaluationDataPoint implements Comparable<EvaluationDataPoint> {

    private String date;

    private Integer value;

    public EvaluationDataPoint(String date, Integer value) {
      this.date = date;
      this.value = value;
    }

    @Override
    public int compareTo(@NotNull EvaluationDataPoint o) {
      return this.date.compareTo(o.date);
    }
  }
}
