package fr.skilltrack.resolvers;

import fr.skilltrack.SkillService;
import fr.skilltrack.entities.Skill;
import fr.skilltrack.entities.SkillImportanceLabel;
import graphql.kickstart.tools.GraphQLMutationResolver;
import io.micrometer.core.lang.Nullable;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class SkillMutation implements GraphQLMutationResolver {
  private SkillService skillService;

  public SkillMutation(SkillService skillService) {
    this.skillService = skillService;
  }

  public Skill createSkill(
      String name, SkillImportanceLabel importance, @Nullable String resourceUrl) {
    return this.skillService.createSkill(name, importance, resourceUrl);
  }

  public Optional<Skill> evaluateSkill(int skillId, int level) {
    return this.skillService.evaluateSkill(skillId, level);
  }
}
