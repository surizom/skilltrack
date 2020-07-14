package fr.skilltrack.resolvers;

import fr.skilltrack.SkillEvaluationChartService;
import fr.skilltrack.SkillService;
import fr.skilltrack.dto.SkillEvaluationChartData;
import fr.skilltrack.entities.Skill;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class SkillQuery implements GraphQLQueryResolver {

  private SkillService skillService;
  private SkillEvaluationChartService skillEvaluationChartService;

  public SkillQuery(
      SkillService skillService, SkillEvaluationChartService skillEvaluationChartService) {
    this.skillService = skillService;
    this.skillEvaluationChartService = skillEvaluationChartService;
  }

  public List<Skill> getSkills(final int count) {
    return this.skillService.getSkills(count);
  }

  public Optional<Skill> getSkill(final int id) {
    return this.skillService.getSkill(id);
  }

  public SkillEvaluationChartData evaluationChart(int skillId) {
    return this.skillEvaluationChartService.evaluationChartData(
        skillService.getSkill(skillId).orElseGet(Skill::new));
  }
}
