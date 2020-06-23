package fr.skilltrack;

import fr.skilltrack.entities.Skill;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SkillService {

  private int id = 0;

  private List<Skill> skills = new ArrayList<>();

  public List<Skill> getSkills() {
    return skills;
  }

  public List<Skill> getSkills(int count) {
    return skills.stream().limit(count).collect(Collectors.toList());
  }

  public Optional<Skill> getSkill(int id) {
    return skills.stream().filter(skill -> skill.getId() == id).findFirst();
  }

  public Skill createSkill(String name, int importance) {
    Skill skill = new Skill();
    this.id = this.id + 1;
    skill.setId(this.id);
    skill.setImportance(importance);
    skill.setName(name);
    skills.add(skill);
    return skill;
  }
}
