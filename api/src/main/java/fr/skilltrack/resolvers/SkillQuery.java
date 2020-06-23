package fr.skilltrack.resolvers;

import fr.skilltrack.SkillService;
import fr.skilltrack.entities.Skill;
import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class SkillQuery implements GraphQLQueryResolver {

  private SkillService skillService;

  public SkillQuery(SkillService skillService) {
    this.skillService = skillService;
  }

  public List<Skill> getSkills(final int count) {
    return this.skillService.getSkills(count);
  }

  public Optional<Skill> getSkill(final int id) {
    return this.skillService.getSkill(id);
  }
}
