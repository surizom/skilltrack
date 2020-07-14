package fr.skilltrack.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode
public class SkillEvaluationChartData {

  private List<String> dateLabels = new ArrayList<>();

  private List<Integer> skillLevels = new ArrayList<>();
}
