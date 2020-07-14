package fr.skilltrack;

import fr.skilltrack.dto.SkillEvaluationChartData;
import fr.skilltrack.entities.Skill;
import fr.skilltrack.entities.SkillEvaluation;
import fr.skilltrack.time.TimeProvider;
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

    Map<String, Integer> evaluationDataWithNoNullValues =
        fillNullValues(evaluationData(skill.getEvaluations()));

    SkillEvaluationChartData skillEvaluationChartData = new SkillEvaluationChartData();
    skillEvaluationChartData.setSkillLevels(
        new ArrayList<>(evaluationDataWithNoNullValues.values()));
    skillEvaluationChartData.setDateLabels(
        new ArrayList<>(evaluationDataWithNoNullValues.keySet()));

    return skillEvaluationChartData;
  }

  private Map<String, Integer> evaluationData(HashMap<Integer, SkillEvaluation> evaluations) {
    return timeProvider
        .beginning()
        .datesUntil(timeProvider.today())
        .map(date -> evaluationDataEntry(date, evaluations))
        .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
  }

  private Map.Entry<String, Integer> evaluationDataEntry(
      LocalDate date, HashMap<Integer, SkillEvaluation> evaluations) {
    return new AbstractMap.SimpleEntry<String, Integer>(
        formatddMM(date), dateEvaluationValue(date, evaluations));
  }

  private String formatddMM(LocalDate date) {
    return date.format(DateTimeFormatter.ofPattern("dd/MM"));
  }

  private Integer dateEvaluationValue(
      LocalDate date, HashMap<Integer, SkillEvaluation> evaluations) {
    return evaluations
        .getOrDefault(this.timeProvider.numberOfDaysSinceBeginning(date), null)
        .getLevel();
  }

  private Map<String, Integer> fillNullValues(Map<String, Integer> evaluationData) {

    int currentValue =
        evaluationData.values().stream().filter(Objects::nonNull).findFirst().orElse(0);

    Map<String, Integer> filledEvaluationData = new HashMap<>();

    for (String date : evaluationData.keySet()) {
      if (evaluationData.get(date) == null) {
        filledEvaluationData.put(date, currentValue);
      } else {
        currentValue = evaluationData.get(date);
        filledEvaluationData.put(date, currentValue);
      }
    }

    return filledEvaluationData;
  }
}
