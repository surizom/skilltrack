package fr.skilltrack;

import fr.skilltrack.dto.SkillEvaluationChartData;
import fr.skilltrack.entities.Skill;
import graphql.kickstart.tools.GraphQLResolver;
import org.springframework.stereotype.Component;

@Component
public class SkillResolver implements GraphQLResolver<Skill> {
  private SkillEvaluationChartService skillEvaluationChartService;

  public SkillResolver(SkillEvaluationChartService skillEvaluationChartService) {
    this.skillEvaluationChartService = skillEvaluationChartService;
  }

  public SkillEvaluationChartData evaluationChart(Skill skill) {
    return this.skillEvaluationChartService.evaluationChartData(skill);
  }
}
