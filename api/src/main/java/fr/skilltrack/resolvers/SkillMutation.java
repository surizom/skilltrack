package fr.skilltrack.resolvers;

import fr.skilltrack.SkillService;
import fr.skilltrack.entities.Skill;
import graphql.kickstart.tools.GraphQLMutationResolver;
import org.springframework.stereotype.Component;

@Component
public class SkillMutation implements GraphQLMutationResolver {
  private SkillService skillService;

  public SkillMutation(SkillService skillService) {
    this.skillService = skillService;
  }

  public Skill createSkill(String name, int importance) {
    return this.skillService.createSkill(name, importance);
  }
}
