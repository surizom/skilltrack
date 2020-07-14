package fr.skilltrack;

import fr.skilltrack.entities.Skill;
import fr.skilltrack.entities.SkillEvaluation;
import fr.skilltrack.entities.SkillImportanceLabel;
import fr.skilltrack.time.TimeProvider;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SkillService {

  private TimeProvider timeProvider;

  public SkillService(TimeProvider timeProvider) {
    this.timeProvider = timeProvider;
  }

  private int id = 0;

  private Map<Integer, Skill> skills = new HashMap<>();

  public List<Skill> getSkills() {
    return new ArrayList<>(skills.values());
  }

  public List<Skill> getSkills(int count) {
    return skills.values().stream().limit(count).collect(Collectors.toList());
  }

  public Optional<Skill> getSkill(int id) {
    return skills.values().stream().filter(skill -> skill.getId() == id).findFirst();
  }

  public Skill createSkill(String name, SkillImportanceLabel importance, String resourceUrl) {
    Skill skill = new Skill();
    this.id = this.id + 1;
    skill.setId(this.id);
    skill.setImportance(importance);
    skill.setName(name);
    skill.setResourceUrl(resourceUrl);
    skills.put(id, skill);
    return skill;
  }

  public Optional<Skill> evaluateSkill(int skillId, int level) {
    Skill skillToEvaluate = skills.getOrDefault(skillId, null);

    if (skillToEvaluate == null) {
      return Optional.empty();
    }

    SkillEvaluation skillEvaluation = new SkillEvaluation();
    skillEvaluation.setLevel(level);

    skillToEvaluate
        .getEvaluations()
        .put(timeProvider.numberOfDaysSinceBeginning(), skillEvaluation);

    return Optional.of(skillToEvaluate);
  }
}
