package fr.skilltrack;

import fr.skilltrack.entities.Skill;
import fr.skilltrack.entities.SkillEvaluation;
import fr.skilltrack.entities.SkillImportance;
import fr.skilltrack.time.TimeProvider;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SkillService {

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

  public Skill createSkill(String name, SkillImportance importance) {
    Skill skill = new Skill();
    this.id = this.id + 1;
    skill.setId(this.id);
    skill.setImportance(importance);
    skill.setName(name);
    skills.put(id, skill);
    return skill;
  }

  public List<SkillEvaluation> getSkillEvaluations(int skillId) {
    return this.getSkill(skillId).orElse(new Skill()).getEvaluations();
  }

  public Optional<Skill> evaluateSkill(int skillId, int level) {
    Skill skillToEvaluate = skills.getOrDefault(skillId, null);

    if (skillToEvaluate == null) {
      return Optional.empty();
    }

    SkillEvaluation skillEvaluation = new SkillEvaluation();
    skillEvaluation.setLevel(level);
    skillEvaluation.setSkillId(skillId);
    skillEvaluation.setTimestamp(TimeProvider.now().getEpochSecond());

    skillToEvaluate.getEvaluations().add(skillEvaluation);

    return Optional.of(skillToEvaluate);
  }
}
